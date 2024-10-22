import { Request, Response } from 'express';
import { TeamService } from '../../../app/services/teamService';
import { MongoItemRepository } from '../repositories/mongoTeamRepository';
import { MongoTournamentRepository } from '../repositories/mongoTournamentRepository';
import { TournamentService } from '../../../app/services/tournamentService';
import logger from '../../../utils/logger';
import { updatePositionTables } from '../../../utils/tournamentUtils';

const itemRepository = new MongoItemRepository();
const teamService = new TeamService(itemRepository);

const tournamentRepository = new MongoTournamentRepository();
const tournamentService = new TournamentService(tournamentRepository);

const fetchAllTeamsAutomatically = async () => {
  try {
    logger.info('Init process cron');
    await tournamentService.getTournament();
    const tables = await teamService.getTables();

    if (tables) {
      const updatedTables = await updatePositionTables(tables);

      return updatedTables;
    }
    logger.info('CRON process success');
  } catch (error: any) {
    logger.error(`Erro: ${error?.message} | Stack: ${error?.stack}`)
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
    logger.info('Init process cron by endpoint');
    await fetchAllTeamsAutomatically();
    logger.info('CRON process by endpoint success');
    return res.status(200).json({ message: 'Teams fetched successfully' });
  } catch (error: any) {
    logger.error(`Erro: ${error?.message} | Stack: ${error?.stack}`)
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