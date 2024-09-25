import { Request, Response } from 'express';
import { TeamService } from '../../../app/services/teamService';
import { MongoItemRepository } from '../repositories/mongoItemRepository';
import cron from 'node-cron';

const itemRepository = new MongoItemRepository();
const teamService = new TeamService(itemRepository);

const fetchAllTeamsAutomatically = async () => {
  try {
    const teams = await teamService.getTables();
    console.log('Times obtidos automaticamente:', teams);
  } catch (error) {
    console.error('Erro ao obter times automaticamente:', error);
  }
};

cron.schedule('59 23 * * *', fetchAllTeamsAutomatically);

fetchAllTeamsAutomatically();

export const addTeam = async (req: Request, res: Response) => {
  try {
    const teamBody = req.body;
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

export const getAllTeams = async (req: Request, res: Response) => {
  try {
    const teams = await teamService.getAllTeams();

    return res.status(200).json(teams);
  } catch (error) {
    if (error instanceof Error) {
      res.status(400).json({ error: error.message });
    } else {
      res.status(400).json({ error: 'An unknown error occurred' });
    }
  }
};

export const getTeamBySlug = async (req: Request, res: Response) => {
  try {
    const { slug } = req.body;
    const team = await teamService.getTeamBySlug(slug);

    return res.status(200).json(team);
  } catch (error) {
    if (error instanceof Error) {
      res.status(400).json({ error: error.message });
    } else {
      res.status(400).json({ error: 'An unknown error occurred' });
    }
  }
};

export const updateTeam = async (req: Request, res: Response) => {
  try {
    const { team } = req.body;
    const updatedTeam = await teamService.update(team);

    return res.status(200).json(updatedTeam);
  } catch (error) {
    if (error instanceof Error) {
      res.status(400).json({ error: error.message });
    } else {
      res.status(400).json({ error: 'An unknown error occurred' });
    }
  }
};

export const getTable = async (req: Request, res: Response) => {
  try {
    const tables = await teamService.getTables();

    return res.status(200).json(tables);
  } catch (error) {
    if (error instanceof Error) {
      res.status(400).json({ error: error.message });
    } else {
      res.status(400).json({ error: 'An unknown error occurred' });
    }
  }
};