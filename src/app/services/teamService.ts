import { TeamRepositoryPort } from '../ports/teamRepositoryPort';
import { Team } from '../../domain/entities/team';

export class TeamService {
  constructor(private readonly teamRepository: TeamRepositoryPort) {}

  async createTeam(teamBody: any): Promise<Team> {
    const { name, logo, address, season } = teamBody;

    const team = new Team('', name, logo, address, season);

    return await this.teamRepository.createTeam(team);
  }
}
