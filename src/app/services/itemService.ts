import { ItemRepositoryPort } from '../ports/itemRepositoryPort';
import { Item } from '../../domain/entities/item';

export class ItemService {
  constructor(private readonly itemRepository: ItemRepositoryPort) {}

  async createItem(name: string, link: string, quantity: number, place: string): Promise<Item> {
    const item = new Item('', name, link, quantity, place);
    return await this.itemRepository.createItem(item);
  }

  async getAllItens(): Promise<Item[]> {
    return await this.itemRepository.getAllItens();
  }

  async updateItem(quantity: number, name: string): Promise<Item> {
    return await this.itemRepository.updateItem(quantity, name);
  }
}
