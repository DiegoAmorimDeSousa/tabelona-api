import { TeamRepositoryPort } from '../ports/teamRepositoryPort';
import { Team } from '../../domain/entities/team';

export class TeamService {
  constructor(private readonly teamRepository: TeamRepositoryPort) {}

  async createTeam(teamBody: any): Promise<Team> {
    const { name, logo, address, season, slug } = teamBody;

    const team = new Team('', name, logo, slug, '', address, season);

    return await this.teamRepository.createTeam(team);
  }

  async getAllTeams(): Promise<Team[]> {
    return await this.teamRepository.getAllTeams();
  }

  async getTeam(name: string): Promise<Team | null> {
    return await this.teamRepository.getTeam(name);
  }

  async getTeamBySlug(slug: string): Promise<Team | null> {
    return await this.teamRepository.getTeamBySlug(slug);
  }

  async update(team: any): Promise<Team | null> {
    return await this.teamRepository.update(team);
  }

  async getTables(): Promise<any> {
    return await this.teamRepository.getTables();
  }
}
