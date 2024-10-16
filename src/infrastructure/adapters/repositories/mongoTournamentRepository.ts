import { TournamentRepositoryPort } from '../../../app/ports/tournamentRepository';
import axios from 'axios';
import { MongoItemRepository } from './mongoTeamRepository';
import { TeamService } from '../../../app/services/teamService';

const itemRepository = new MongoItemRepository();
const teamService = new TeamService(itemRepository);

export class MongoTournamentRepository implements TournamentRepositoryPort {
  async getTournament(): Promise<any> {
    try {
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
                    onwGoals,
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

        if (tables) {
          const updatedTables = await Promise.all(
            tables.map(async (table: any, index: number) => {
              if (index === 0) {
                const updatedSerieA = await Promise.all(
                  table?.serieABrasil?.map(async (serieA: any, indexSerie: number) => {
                    const team = await teamService.getTeam(serieA?._id);
                    
                    if (team) {
                      const season: any = team?.season?.find((data: any) => data?.name === 'Série A - Brasil');

                      if (season) {
                        const newTeamSeason = team?.season.map((season: any) => {
                          if (season?.name === 'Série A - Brasil') {
                            return {
                              ...season?._doc,
                              position: indexSerie + 1
                            };
                          } else {
                            return season;
                          }
                        });

                        const updateItemData = {
                          ...team,
                          season: newTeamSeason
                        };
                        await teamService.update(updateItemData);

                        return {
                          ...serieA,
                          currentPosition: indexSerie + 1
                        };
                      }
                    }

                    return {
                      ...serieA,
                      currentPosition: indexSerie + 1
                    };
                  })
                );

                const updatedSerieB = await Promise.all(
                  table?.serieBBrasil?.map(async (serieB: any, indexSerie: number) => {
                    const team = await teamService.getTeam(serieB?._id);
                    
                    if (team) {
                      const season: any = team?.season?.find((data: any) => data?.name === 'Série B - Brasil');

                      if (season) {
                        const newTeamSeason = team?.season.map((season: any) => {
                          if (season?.name === 'Série B - Brasil') {
                            return {
                              ...season?._doc,
                              position: indexSerie + 1
                            };
                          } else {
                            return season;
                          }
                        });

                        const updateItemData = {
                          ...team,
                          season: newTeamSeason
                        };
                        await teamService.update(updateItemData);

                        return {
                          ...serieB,
                          currentPosition: indexSerie + 1
                        };
                      }
                    }

                    return {
                      ...serieB,
                      currentPosition: indexSerie + 1
                    };
                  })
                );

                return {
                  ...table,
                  serieABrasil: updatedSerieA,
                  serieBBrasil: updatedSerieB
                };
              } else {
                return table;
              }
            })
          );

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

        const currentDate = new Date(date);

        const startOfDayUTC = Date.UTC(currentDate.getUTCFullYear(), currentDate.getUTCMonth(), currentDate.getUTCDate(), 0, 0, 0) / 1000;
        const endOfDayUTC = Date.UTC(currentDate.getUTCFullYear(), currentDate.getUTCMonth(), currentDate.getUTCDate(), 23, 59, 59) / 1000;

        const todayGames = events.filter((evento: any) => {
          const startTimestamp = evento.startTimestamp;
          const isToday = startTimestamp >= startOfDayUTC && startTimestamp <= endOfDayUTC;
          const isBrazil = evento?.tournament?.category?.slug === 'brazil';
          
          return isToday && isBrazil || isBrazil && evento?.status?.description === 'Not started';
        });

        for (const event of todayGames) {
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
