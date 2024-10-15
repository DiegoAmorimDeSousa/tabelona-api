import { Season, Tournament } from "../domain/entities";

export function createSeasonData(season: Season, logo: string, id: string, name: string) {
  return {
    name,
    position: season.position,
    wins: season.wins,
    points: season.points,
    draws: season.draws,
    defeat: season.defeat,
    proGoals: season.proGoals,
    onwGoals: season.onwGoals,
    stagePlayOff: season.stagePlayOff,
    status: season.status,
    logo,
    _id: id,
    currentPosition: season.position 
  };
}

export function sortTables(teams: Tournament[]): Tournament[] {
  return teams.sort((a, b) => {
    if (b.points !== a.points) return b.points - a.points;
    if (b.wins !== a.wins) return b.wins - a.wins;
    if (b.proGoals !== a.proGoals) return b.proGoals - a.proGoals;
    if (a.onwGoals !== b.onwGoals) return a.onwGoals - b.onwGoals;
    if (a.draws !== b.draws) return a.draws - b.draws;
    if (a.position !== b.position) return a.position - b.position;

    return 0;
  });
}
