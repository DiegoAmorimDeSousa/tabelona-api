import { Request, Response } from 'express';
import { TeamService } from '../../../app/services/teamService';
import { MongoItemRepository } from '../repositories/mongoItemRepository';
import cron from 'node-cron';
import { MongoTournamentRepository } from '../repositories/mongoTournamentRepository';
import { TournamentService } from '../../../app/services/tournamentService';

const itemRepository = new MongoItemRepository();
const teamService = new TeamService(itemRepository);

const tournamentRepository = new MongoTournamentRepository();
const tournamentService = new TournamentService(tournamentRepository);

const fetchAllTeamsAutomatically = async () => {
  try {
    await tournamentService.getTournament('');
    console.log('------ CRON REALIZADO ------')
  } catch (error) {
    console.error('Erro ao obter times automaticamente:', error);
  }
};

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

export const fetchAllTeamsEndpoint = async (req: Request, res: Response) => {
  try {
    console.log('----- INICIANDO O CRON -----')
    await fetchAllTeamsAutomatically();
    return res.status(200).json({ message: 'Teams fetched successfully' });
  } catch (error: any) {
    res.status(500).json({ error: error.message });
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