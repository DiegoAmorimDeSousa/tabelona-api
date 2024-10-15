import { TournamentRepositoryPort } from '../ports/tournamentRepository';

export class TournamentService {
  constructor(private readonly tournamentRepository: TournamentRepositoryPort) {}

  async getTournament(): Promise<any> {
    return await this.tournamentRepository.getTournament();
  }

  async getTournamentByDate(date: string): Promise<any> {
    return await this.tournamentRepository.getTournamentByDate(date);
  }
}
