import { TeamService } from "../app/services/teamService";
import { HomeAwayTeam, Pontuation, Season, Team } from "../domain/entities";
import { MongoItemRepository } from "../infrastructure/adapters/repositories/mongoTeamRepository";

export function filterSeasonByName(seasons: { name: string; position: number; wins: number; points: number; draws: number; defeat: number; proGoals: number; onwGoals: number; stagePlayOff?: string; status: string }[], leagueName: string): Season[] {
  return seasons
    .filter(season => season.name === leagueName) 
    .map(season => new Season(                    
      season.name,
      season.position,
      season.wins,
      season.points,
      season.draws,
      season.defeat,
      season.proGoals,
      season.onwGoals,
      season.stagePlayOff || '', 
      season.status,
    ));
}

export function updatePontuationTeam(homeScore: HomeAwayTeam, awayScore: HomeAwayTeam) {
  let win = false;
  let draw = false;
  let defeat = false;
  let goalsPro = 0;
  let goalsOwn = 0;
  if (homeScore?.current > awayScore?.current) win = true;
  if (homeScore?.current < awayScore?.current) defeat = true;
  if (homeScore?.current === awayScore?.current) draw = true;
  goalsPro = homeScore?.current;
  goalsOwn = awayScore?.current;

  return {
    win, draw, defeat, goalsOwn, goalsPro
  }
}

export async function updateNewSeason(homeTeam: Team, newPontuation: Pontuation) {
  if (!homeTeam || !homeTeam.season) {
    console.error('Home team or season is undefined', { homeTeam });
    return null;
  }

  const updatedSeasons: any[] = [];

  for (const season of homeTeam.season) {
    if (season?.status === 'in progress') {
      let newWins = season?.wins || 0;
      let newDraws = season?.draws || 0;
      let newDefeat = season?.defeat || 0;
      let newPoints = season?.points || 0;
      const proGoals = (season?.proGoals || 0) + (newPontuation?.goalsPro || 0);
      const onwGoals = (season?.onwGoals || 0) + (newPontuation?.goalsOwn || 0);

      if (newPontuation?.win) {
        newWins += 1;
        newPoints += 3;
      }
      if (newPontuation?.draw) {
        newDraws += 1;
        newPoints += 1;
      }
      if (newPontuation?.defeat) {
        newDefeat += 1;
      }

      const updatedSeason = {
        ...season?._doc,
        wins: newWins,
        draws: newDraws,
        defeat: newDefeat,
        points: newPoints,
        proGoals,
        onwGoals,
      };
      updatedSeasons.push(updatedSeason);
    } else {
      updatedSeasons.push(season);
    }
  }

  return updatedSeasons;
}

export async function updatePositionTables(tables: any) {
  const updatedTables = await Promise.all(
    tables.map(async (table: any, index: number) => {
      if (index === 0) {
        const updatedSerieA = await updateByTable(table?.serieABrasil, 'Série A - Brasil');
        const updatedSerieB = await updateByTable(table?.serieBBrasil, 'Série B - Brasil');

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

export async function updateByTable(table: any, seasonName: string) {
  const itemRepository = new MongoItemRepository();
  const teamService = new TeamService(itemRepository);

  const updatedTable = await Promise.all(
    table?.map(async (tableMap: any, indexSerie: number) => {
      const team = await teamService.getTeam(tableMap?._id);

      if (team) {
        const season: any = team?.season?.find((data: any) => data?.name === seasonName);

        if (season) {
          const newTeamSeason = team?.season.map((season: any) => {
            if (season?.name === seasonName) {
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
            ...tableMap,
            currentPosition: indexSerie + 1
          };
        }
      }

      return {
        ...tableMap,
        currentPosition: indexSerie + 1
      };
    })
  );

  return updatedTable; 
}

export function todayGames(date: any, events: any){
  const currentDate = new Date(date);

  const startOfDayUTC = Date.UTC(currentDate.getUTCFullYear(), currentDate.getUTCMonth(), currentDate.getUTCDate(), 0, 0, 0) / 1000;
  const endOfDayUTC = Date.UTC(currentDate.getUTCFullYear(), currentDate.getUTCMonth(), currentDate.getUTCDate(), 23, 59, 59) / 1000;

  const todayGames = events.filter((evento: any) => {
    const startTimestamp = evento.startTimestamp;
    const isToday = startTimestamp >= startOfDayUTC && startTimestamp <= endOfDayUTC;
    const isBrazil = 
      evento?.tournament?.category?.slug === 'brazil' || 
      evento?.tournament?.category?.slug === 'south-america' ||
      evento?.tournament?.category?.slug === 'europe' ||
      evento?.tournament?.category?.slug === 'spain'; 
    
    return isToday && isBrazil || isBrazil && evento?.status?.description === 'Not started';
  });

  return todayGames;
}