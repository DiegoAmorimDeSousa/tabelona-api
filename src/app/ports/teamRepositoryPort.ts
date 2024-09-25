import { Team } from '../../domain/entities/team';

export interface TeamRepositoryPort {
  createTeam(team: Team): Promise<Team>;
  getAllTeams(): Promise<Team[]>;
  getTeamBySlug(slug: string): Promise<Team | null>;
  update(team: any): Promise<Team | null>;
  getTables(): Promise<any>;
}
