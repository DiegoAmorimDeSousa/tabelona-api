import { ItemRepositoryPort } from '../../../app/ports/itemRepositoryPort';
import { Item } from '../../../domain/entities/item';
import mongoose, { Document, Schema } from 'mongoose';

interface ItemDocument extends Document {
  name: string;
  link: string;
  quantity: number;
}

const itemSchema = new Schema<ItemDocument>({
  name: { type: String, required: true },
  link: { type: String, required: true },
  quantity: { type: Number, required: true },
});

const ItemModel = mongoose.model<ItemDocument>('Item', itemSchema);

export class MongoItemRepository implements ItemRepositoryPort {
  async createItem(item: Item): Promise<Item> {
    const itemDoc = new ItemModel({ name: item.name, link: item.link, quantity: item.quantity });
    await itemDoc.save();
    return new Item(itemDoc.id, itemDoc.name, itemDoc.link, itemDoc.quantity);
  }

  async getAllItens(): Promise<Item[]> {
    const itemDocs = await ItemModel.find();
    return itemDocs.map(itemDoc => new Item(itemDoc.id, itemDoc.name, itemDoc.link, itemDoc.quantity));
  }
}
