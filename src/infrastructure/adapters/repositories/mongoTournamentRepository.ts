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
						const twoDaysInMs = 2 * 24 * 60 * 60 * 1000;
						const formattedDateObj = new Date(`${formattedDate}T00:00:00`);

            const homeTeam = await teamService.getTeamBySlug(homeTeamSlug);
						if (homeTeam && homeTeam.updateAt && (formattedDateObj.getTime() - new Date(homeTeam.updateAt).getTime() > twoDaysInMs) || homeTeam && !homeTeam?.updateAt) {
							let win = false;
              let draw = false;
              let defeat = false;
              let goalsPro = 0;
              let goalsOwn = 0;
							if (event?.homeScore?.current > event?.awayScore?.current) win = true;
							if (event?.homeScore?.current < event?.awayScore?.current) defeat = true;
							if (event?.homeScore?.current === event?.awayScore?.current) draw = true;
							goalsPro = event?.homeScore?.current;
							goalsOwn = event?.awayScore?.current;

							const newSeason = await homeTeam?.season?.map((season: any) => {
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
                ...homeTeam,
                updateAt: formattedDate,
                season: newSeason
              };

              await teamService.update(updateItemData);
						}

						const awayTeam = await teamService.getTeamBySlug(awayTeamSlug);

						if (awayTeam && awayTeam.updateAt && (formattedDateObj.getTime() - new Date(awayTeam.updateAt).getTime() > twoDaysInMs) || awayTeam && !awayTeam?.updateAt) {
							let win = false;
              let draw = false;
              let defeat = false;
              let goalsPro = 0;
              let goalsOwn = 0;
							if (event?.homeScore?.current < event?.awayScore?.current) win = true;
							if (event?.homeScore?.current > event?.awayScore?.current) defeat = true;
							if (event?.homeScore?.current === event?.awayScore?.current) draw = true;
							goalsOwn = event?.homeScore?.current;
							goalsPro = event?.awayScore?.current;

							const newSeason = await awayTeam?.season?.map((season: any) => {
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
                ...awayTeam,
                updateAt: formattedDate,
                season: newSeason
              };

              await teamService.update(updateItemData);
						}
              return true
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

	async getTournamentByDate(date: string): Promise<any> {
    const options = {
        method: 'GET',
        url: `${process.env.URL_RAPID_API}/football-scheduled-events`,
        params: { date: date },
        headers: {
            'X-RapidAPI-Key': process.env.X_RAPIDAPI_KEY,
            'X-RapidAPI-Host': process.env.X_RAPIDAPI_HOST
        },
        timeout: 10000 
    };

    const response = await axios.request(options);
    const eventsToday: any = [];

    if (response && response?.data?.status === 'success') {
        const events = response.data?.response?.events || [];

        for (const event of events) {
            if (event?.tournament?.category?.slug === 'brazil') {
                const homeTeamId = event?.homeTeam?.id;
                const awayTeamId = event?.awayTeam?.id;

                const optionsHomeTeam = {
                    method: 'GET',
                    url: `${process.env.URL_RAPID_API}/football-league-team`,
                    params: { teamid: homeTeamId },
                    headers: {
                        'X-RapidAPI-Key': process.env.X_RAPIDAPI_KEY,
                        'X-RapidAPI-Host': process.env.X_RAPIDAPI_HOST
                    },
                    timeout: 10000 
                };

                const optionsAwayTeam = {
                    method: 'GET',
                    url: `${process.env.URL_RAPID_API}/football-league-team`,
                    params: { teamid: awayTeamId },
                    headers: {
                        'X-RapidAPI-Key': process.env.X_RAPIDAPI_KEY,
                        'X-RapidAPI-Host': process.env.X_RAPIDAPI_HOST
                    },
                    timeout: 10000 
                };

                const [responseHomeTeam, responseAwayTeam]: any = await Promise.all([
                    axios.request(optionsHomeTeam),
                    axios.request(optionsAwayTeam)
                ]);

                // Cálculo da minutagem atual do jogo
                const startTimestamp = event?.startTimestamp; 
                const statusTime = event?.statusTime;

                const currentTimestamp = Math.floor(Date.now() / 1000); 
                const elapsedTime = currentTimestamp - startTimestamp; // Tempo decorrido desde o início do jogo

                // Calcular a minutagem atual
                let currentMinute = Math.floor(elapsedTime / 60);
                const totalDuration = statusTime?.max + statusTime?.extra; // Tempo total permitido

                // Limitar a minutagem ao total do jogo
                if (elapsedTime > totalDuration) {
                    currentMinute = Math.floor(totalDuration / 60); // Não pode ultrapassar o total
                }

                // Ajustar o startTimestamp para o fuso horário correto (menos 3 horas)
                const adjustedStartTimestamp = startTimestamp - 10800; // Subtrai 3 horas em segundos
                const startDate = new Date(adjustedStartTimestamp * 1000);
                const formattedStartDate = startDate.toLocaleString('pt-BR', {
                    timeZone: 'UTC', // Ajuste para o fuso horário desejado, se necessário
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
                    currentMinute: currentMinute - 10,
                    formattedStartDate
                });
            }
        }
    }

    return eventsToday;
}



}
