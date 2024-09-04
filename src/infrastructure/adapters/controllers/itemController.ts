import { Request, Response } from 'express';
import { ItemService } from '../../../app/services/itemService';
import { MongoItemRepository } from '../repositories/mongoItemRepository';
import { Item } from '../../../domain/entities/item';
import axios from 'axios';

const itemRepository = new MongoItemRepository();
const itemService = new ItemService(itemRepository);

export const addItens = async (req: Request, res: Response) => {
  try {
    const itemBody = req.body;
    itemBody.forEach(async (item: Item) => {
      await itemService.createItem(item.name, item.link, item.quantity, item.place, item.price);
    });

    return res.status(200).json(true);
  } catch (error) {
    if (error instanceof Error) {
      res.status(400).json({ error: error.message });
    } else {
      res.status(400).json({ error: 'An unknown error occurred' });
    }
  }
};

export const fetchItens = async (req: Request, res: Response) => {
  try {
    const itens = await itemService.getAllItens();
    res.status(200).json(itens);
  } catch (error) {
    if (error instanceof Error) {
      res.status(400).json({ error: error.message });
    } else {
      res.status(400).json({ error: 'An unknown error occurred' });
    }
  }
};

export const updateItem = async (req: Request, res: Response) => {
  try {
    const { quantity, name } = req.body;

    const item = await itemService.updateItem(quantity, name);
    const message = 'Item que foi escolhido: ' + name + '\n\n, quantidade escolhida: ' + quantity
    axios.post(`https://api.callmebot.com/whatsapp.php?phone=554888101647&text=${message}&apikey=${process.env.API_KEY}`)
    res.status(200).json(item);
  } catch (error) {
    if (error instanceof Error) {
      res.status(400).json({ error: error.message });
    } else {
      res.status(400).json({ error: 'An unknown error occurred' });
    }
  };
  
}