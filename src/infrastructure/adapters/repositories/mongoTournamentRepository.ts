import { TournamentRepositoryPort } from '../../../app/ports/tournamentRepository';
import axios from 'axios';
import { MongoItemRepository } from './mongoTeamRepository';
import { TeamService } from '../../../app/services/teamService';
import { formattedDate } from '../../../utils/formattedDate';
import { mountOptions } from '../../../utils/api';
import { todayGames, updateNewSeason, updatePontuationTeam, updatePositionTables } from '../../../utils/tournamentUtils';

const itemRepository = new MongoItemRepository();
const teamService = new TeamService(itemRepository);

export class MongoTournamentRepository implements TournamentRepositoryPort {
  async getTournament(): Promise<any> {
    try {
      const date = formattedDate();
      const options = mountOptions('GET', 'football-scheduled-events', { date: date })

      const response = await axios.request(options);

      if (response.data?.status === 'success') {
        const events = response.data?.response?.events || [];

        await Promise.all(events.map(async (event: any) => {
          if (event.status?.type === 'finished') {
            const homeTeamSlug = event?.homeTeam?.slug;
            const awayTeamSlug = event?.awayTeam?.slug;
						const twoDaysInMs = 2 * 24 * 60 * 60 * 1000;
						const formattedDateObj = new Date(`${formattedDate}T00:00:00`);

            const homeTeam = await teamService.getTeamBySlug(homeTeamSlug);
						if (
              homeTeam && 
              homeTeam.updateAt && 
              (formattedDateObj.getTime() - new Date(homeTeam.updateAt).getTime() > twoDaysInMs) || 
              homeTeam && 
              !homeTeam?.updateAt
            ) {
              const newPontuation = updatePontuationTeam(event?.homeScore, event?.awayScore);

							const newSeason = updateNewSeason(homeTeam, newPontuation)

              const updateItemData = {
                ...homeTeam,
                updateAt: date,
                season: newSeason
              };

              await teamService.update(updateItemData);
						}

						const awayTeam = await teamService.getTeamBySlug(awayTeamSlug);

						if (
              awayTeam && 
              awayTeam.updateAt && 
              (formattedDateObj.getTime() - new Date(awayTeam.updateAt).getTime() > twoDaysInMs) || 
              awayTeam && 
              !awayTeam?.updateAt
            ) {
              const newPontuation = updatePontuationTeam(event?.homeScore, event?.awayScore);
				      const newSeason = updateNewSeason(awayTeam, newPontuation)

              const updateItemData = {
                ...awayTeam,
                updateAt: date,
                season: newSeason
              };

              await teamService.update(updateItemData);
						}
              return true
          }
          return null; 
        }));

        const tables = await teamService.getTables();

        if (tables) {
          const updatedTables = await updatePositionTables(tables);

          return updatedTables;
        }
      } else {
        throw new Error('Failed to fetch tournament data');
      }
    } catch (error) {
      console.error('Error fetching tournament data:', error);
      throw new Error('Unable to fetch tournament data');
    }
  }

	async getTournamentByDate(date: string): Promise<any> {
    const options = mountOptions('GET', 'football-scheduled-events', { date: date })
    const response = await axios.request(options);
    const eventsToday: any = [];

    if (response && response?.data?.status === 'success') {
      const events = response.data?.response?.events || [];

      const games = todayGames(date, events);

      for (const event of games) {
        if (event?.tournament?.category?.slug === 'brazil') {
          const homeTeamId = event?.homeTeam?.id;
          const awayTeamId = event?.awayTeam?.id;

          const optionsHomeTeam = mountOptions('GET', 'football-league-team', { teamid: homeTeamId })
          const optionsAwayTeam = mountOptions('GET', 'football-league-team', { teamid: awayTeamId })
          const [responseHomeTeam, responseAwayTeam]: any = await Promise.all([
            axios.request(optionsHomeTeam),
            axios.request(optionsAwayTeam)
          ]);

          const startTimestamp = event?.startTimestamp; 
          const statusTime = event?.statusTime;
          const currentTimestamp = Math.floor(Date.now() / 1000); 
          const isInProgress = event?.status?.type === 'inprogress';
          let currentMinute = 0;
          if (isInProgress) {
            const elapsedTime = currentTimestamp - startTimestamp;
            currentMinute = Math.floor(elapsedTime / 60);
            const totalDuration = statusTime?.max + statusTime?.extra;

            if (elapsedTime > totalDuration) {
              currentMinute = Math.floor(totalDuration / 60); 
            }
          }
      
          const adjustedStartTimestamp = startTimestamp - 10800; 
          const startDate = new Date(adjustedStartTimestamp * 1000);
          const formattedStartDate = startDate.toLocaleString('pt-BR', {
            timeZone: 'UTC', 
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
          });
      
          eventsToday.push({
            homeTeam: event?.homeTeam?.nameCode,
            homeTeamFull: event?.homeTeam?.name,
            awayTeamFull: event?.awayTeam?.name,
            awayTeam: event?.awayTeam?.nameCode,
            homeScore: event?.homeScore?.current,
            awayScore: event?.awayScore?.current,
            roundInfo: event?.roundInfo,
            status: event?.status?.type,
            tournament: event?.season?.name,
            homeTeamLogo: responseHomeTeam?.data?.response?.team?.logourl,
            awayTeamLogo: responseAwayTeam?.data?.response?.team?.logourl,
            currentMinute: isInProgress ? currentMinute - 1: 0, 
            formattedStartDate
          });
          }
      }      
    }
    return eventsToday;
  }
}
