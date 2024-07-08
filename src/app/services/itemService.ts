import { ItemRepositoryPort } from '../ports/itemRepositoryPort';
import { Item } from '../../domain/entities/item';
// import { UserNotFoundException } from '../../domain/exceptions/userNotFoundException';

export class ItemService {
  constructor(private readonly itemRepository: ItemRepositoryPort) {}

  async createItem(name: string, link: string, quantity: number): Promise<Item> {
    console.log('name', name)
    const item = new Item('', name, link, quantity);
    return await this.itemRepository.createItem(item);
  }

  async getAllItens(): Promise<Item[]> {
    return await this.itemRepository.getAllItens();
  }

  // async getUserById(id: string): Promise<User> {
  //   const user = await this.userRepository.getUserById(id);
  //   if (!user) {
  //     throw new UserNotFoundException(`User with id ${id} not found`);
  //   }
  //   return user;
  // }
}
