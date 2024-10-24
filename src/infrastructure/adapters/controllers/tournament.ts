import { Request, Response } from 'express';
import { TournamentService } from '../../../app/services/tournamentService';
import { MongoTournamentRepository } from '../repositories/mongoTournamentRepository';

const tournamentRepository = new MongoTournamentRepository();
const tournamentService = new TournamentService(tournamentRepository);

export const getTournament = async (req: Request, res: Response) => {
  try {
    const tournament = await tournamentService.getTournament();

    return res.status(200).json(tournament);
  } catch (error) {
    if (error instanceof Error) {
      res.status(400).json({ error: error.message });
    } else {
      res.status(400).json({ error: 'An unknown error occurred' });
    }
  }
};

export const getTournamentByDate = async (req: Request, res: Response) => {
  try {
    const { date } = req.params;
    const events = await tournamentService.getTournamentByDate(date);

    return res.status(200).json(events);
  } catch (error) {
    if (error instanceof Error) {
      res.status(400).json({ error: error.message });
    } else {
      res.status(400).json({ error: 'An unknown error occurred' });
    }
  }
};