export interface TournamentRepositoryPort {
  getTournament(tournament: string): Promise<any>;
}
