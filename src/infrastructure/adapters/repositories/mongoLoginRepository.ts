import { randomUUID } from 'crypto';
import { ItemRepositoryPort } from '../../../app/ports/itemRepositoryPort';
import { Item } from '../../../domain/entities/item';
import mongoose, { Document, Schema } from 'mongoose';

interface ItemDocument extends Document {
  id: String;
  name: string;
  link: string;
  quantity: number;
}

const itemSchema = new Schema<ItemDocument>({
  id: { type: String, required: true },
  name: { type: String, required: true },
  link: { type: String, required: true },
  quantity: { type: Number, required: true },
});

const ItemModel = mongoose.model<ItemDocument>('Item', itemSchema);

export class MongoItemRepository implements ItemRepositoryPort {
  async createItem(item: Item): Promise<Item> {
    const itemDoc = new ItemModel({ id: randomUUID(), name: item.name, link: item.link, quantity: item.quantity });
    await itemDoc.save();
    return new Item(itemDoc.id, itemDoc.name, itemDoc.link, itemDoc.quantity);
  }

  async getAllItens(): Promise<Item[]> {
    const itemDocs = await ItemModel.find();
    return itemDocs.map(itemDoc => new Item(itemDoc.id, itemDoc.name, itemDoc.link, itemDoc.quantity));
  }

  async updateItem(quantity: String, id: String): Promise<Item[]> {
    console.log(quantity, id)
    const itemDocs = await ItemModel.find({ _id: id });
    return itemDocs.map(itemDoc => new Item(itemDoc.id, itemDoc.name, itemDoc.link, itemDoc.quantity));
  }
}
