import { UserRepositoryPort } from '../ports/userRepositoryPort';
import { User } from '../../domain/entities/user';
import { UserNotFoundException } from '../../domain/exceptions/userNotFoundException';

export class UserService {
  constructor(private readonly userRepository: UserRepositoryPort) {}

  async createUser(name: string, email: string): Promise<User> {
    const user = new User('', name, email);
    return await this.userRepository.createUser(user);
  }

  async getAllUsers(): Promise<User[]> {
    return await this.userRepository.getAllUsers();
  }

  async getUserById(id: string): Promise<User> {
    const user = await this.userRepository.getUserById(id);
    if (!user) {
      throw new UserNotFoundException(`User with id ${id} not found`);
    }
    return user;
  }
}
