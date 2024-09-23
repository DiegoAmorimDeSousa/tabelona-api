import { Request, Response } from 'express';
import { TeamService } from '../../../app/services/teamService';
import { MongoItemRepository } from '../repositories/mongoItemRepository';
// import { Item } from '../../../domain/entities/team';
// import axios from 'axios';

const itemRepository = new MongoItemRepository();
const teamService = new TeamService(itemRepository);

export const addTeam = async (req: Request, res: Response) => {
  try {
    const teamBody = req.body;
    console.log('teamBody', teamBody)
    await teamService.createTeam(teamBody);

    return res.status(200).json(true);
  } catch (error) {
    if (error instanceof Error) {
      res.status(400).json({ error: error.message });
    } else {
      res.status(400).json({ error: 'An unknown error occurred' });
    }
  }
};