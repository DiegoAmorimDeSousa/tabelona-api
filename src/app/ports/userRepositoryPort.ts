import { User } from '../../domain/entities/user';

export interface UserRepositoryPort {
  createUser(user: User): Promise<User>;
  getUserById(id: string): Promise<User | null>;
  getAllUsers(): Promise<User[]>;
}
