import { TournamentRepositoryPort } from '../ports/tournamentRepository';

export class TournamentService {
  constructor(private readonly tournamentRepository: TournamentRepositoryPort) {}

  async getTournament(tournament: string): Promise<any> {
    return await this.tournamentRepository.getTournament(tournament);
  }
}