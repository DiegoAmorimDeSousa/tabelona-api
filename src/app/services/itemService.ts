import { ItemRepositoryPort } from '../ports/itemRepositoryPort';
import { Item } from '../../domain/entities/item';

export class ItemService {
  constructor(private readonly itemRepository: ItemRepositoryPort) {}

  async createItem(name: string, link: string, quantity: number, place: string, price: string): Promise<Item> {
    const item = new Item('', name, link, quantity, place, price);
    return await this.itemRepository.createItem(item);
  }

  async getAllItens(): Promise<any> {
    const allItems = await this.itemRepository.getAllItens();
    const kitchen: any = []
    allItems.map((item: any) => {
      if(item.place === 'Cozinha'){
        return kitchen.push(item);
      }
    });
    return [ {kitchen} ]
  }

  async updateItem(quantity: number, name: string): Promise<Item> {
    return await this.itemRepository.updateItem(quantity, name);
  }
}
