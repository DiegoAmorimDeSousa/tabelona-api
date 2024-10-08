export interface TournamentRepositoryPort {
  getTournament(tournament: string): Promise<any>;
  getTournamentByDate(date: string): Promise<any>;
}
