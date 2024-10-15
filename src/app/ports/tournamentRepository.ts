export interface TournamentRepositoryPort {
  getTournament(): Promise<any>;
  getTournamentByDate(date: string): Promise<any>;
}
