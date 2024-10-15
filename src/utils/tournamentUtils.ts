import { Season } from "../domain/entities";

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
