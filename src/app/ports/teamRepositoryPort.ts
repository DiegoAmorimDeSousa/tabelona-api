import { Team } from '../../domain/entities/team';

export interface TeamRepositoryPort {
  createTeam(team: Team): Promise<Team>;
}
