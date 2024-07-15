import { Item } from '../../domain/entities/item';

export interface ItemRepositoryPort {
  createItem(user: Item): Promise<Item>;
  getAllItens(): Promise<Item[]>;
  updateItem(quantity: number, id: String): Promise<Item>;
}
