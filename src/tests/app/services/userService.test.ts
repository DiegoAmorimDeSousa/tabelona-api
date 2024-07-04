import { UserService } from '../../../app/services/userService';
import { UserRepositoryPort } from '../../../app/ports/userRepositoryPort';
import { User } from '../../../domain/entities/user';

class MockUserRepository implements UserRepositoryPort {
  private users: User[] = [];
  
  async createUser(user: User): Promise<User> {
    this.users.push(user);
    return user;
  }

  async getUserById(id: string): Promise<User | null> {
    return this.users.find(user => user.id === id) || null;
  }

  async getAllUsers(): Promise<User[]> {
    return this.users;
  }
}

describe('UserService', () => {
  let userService: UserService;
  let mockUserRepository: MockUserRepository;

  beforeEach(() => {
    mockUserRepository = new MockUserRepository();
    userService = new UserService(mockUserRepository);
  });

  it('should create a user', async () => {
    const user = await userService.createUser('John Doe', 'john@example.com');
    expect(user.name).toBe('John Doe');
    expect(user.email).toBe('john@example.com');
  });

  it('should get all users', async () => {
    await userService.createUser('Jane Doe', 'jane@example.com');
    const users = await userService.getAllUsers();
    expect(users.length).toBe(1);
  });
});
