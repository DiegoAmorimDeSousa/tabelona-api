import { TournamentRepositoryPort } from '../../../app/ports/tournamentRepository';
import axios from 'axios';
import { MongoItemRepository } from './mongoItemRepository';
import { TeamService } from '../../../app/services/teamService';

const itemRepository = new MongoItemRepository();
const teamService = new TeamService(itemRepository);

export class MongoTournamentRepository implements TournamentRepositoryPort {
  async getTournament(tournament: string): Promise<any> {
    try {
      console.log('tournament', tournament);

      const today = new Date();
      const year = today.getFullYear();
      const month = String(today.getMonth() + 1).padStart(2, '0');
      const day = String(today.getDate()).padStart(2, '0');
      const formattedDate = `${year}-${month}-${day}`;

      const options = {
        method: 'GET',
        url: `${process.env.URL_RAPID_API}/football-scheduled-events`,
        params: { date: formattedDate },
        headers: {
          'X-RapidAPI-Key': process.env.X_RAPIDAPI_KEY,
          'X-RapidAPI-Host': process.env.X_RAPIDAPI_HOST
        },
        timeout: 10000 
      };

      const response = await axios.request(options);

      if (response.data?.status === 'success') {
        const events = response.data?.response?.events || [];

        await Promise.all(events.map(async (event: any) => {
          if (event.status?.type === 'finished') {
            const homeTeamSlug = event?.homeTeam?.slug;
            const awayTeamSlug = event?.awayTeam?.slug;

            const homeTeam = await teamService.getTeamBySlug(homeTeamSlug);
            const awayTeam = await teamService.getTeamBySlug(awayTeamSlug);
            const team = homeTeam || awayTeam;

            if (team && team?.updateAt !== formattedDate) {
              let win = false;
              let draw = false;
              let defeat = false;
              let goalsPro = 0;
              let goalsOwn = 0;

              if (homeTeam) {
                if (event?.homeScore?.current > event?.awayScore?.current) win = true;
                if (event?.homeScore?.current < event?.awayScore?.current) defeat = true;
                goalsPro = event?.homeScore?.current;
                goalsOwn = event?.awayScore?.current;
              }

              if (awayTeam) {
                if (event?.homeScore?.current < event?.awayScore?.current) win = true;
                if (event?.homeScore?.current > event?.awayScore?.current) defeat = true;
                goalsOwn = event?.homeScore?.current;
                goalsPro = event?.awayScore?.current;
              }

              if (event?.homeScore?.current === event?.awayScore?.current) draw = true;

              const newSeason = await team?.season?.map((season: any) => {
                if(season?.status === 'in progress'){
                  let newWins = season?.wins;
                  let newDraws = season?.draws;
                  let newDefeat = season?.defeat;
                  let newPoints = season?.points;
                  const proGoals = season?.proGoals + goalsPro;
                  const onwGoals = season?.onwGoals + goalsOwn;

                  if(win) {
                    newWins = newWins + 1;
                    newPoints = newPoints + 3;
                  };
                  if(draw) {
                    newDraws = newDraws + 1;
                    newPoints = newPoints + 1;
                  };
                  if(defeat) newDefeat = newDefeat + 1;
                  return {
                    ...season?._doc,
                    wins: newWins,
                    draws: newDraws,
                    defeat: newDefeat,
                    points: newPoints,
                    proGoals,
                    onwGoals
                  }
                }
                return season
              });

              const updateItemData = {
                ...team,
                updateAt: formattedDate,
                season: newSeason
              };

              await teamService.update(updateItemData);

              return true
            }
          }
          return null; 
        }));

        const tables = await teamService.getTables();

        return tables
      } else {
        throw new Error('Failed to fetch tournament data');
      }
    } catch (error) {
      console.error('Error fetching tournament data:', error);
      throw new Error('Unable to fetch tournament data');
    }
  }
}
