import { Request, Response } from 'express';
import { TournamentService } from '../../../app/services/tournamentService';
import { MongoTournamentRepository } from '../repositories/mongoTournamentRepository';
// import { Item } from '../../../domain/entities/team';
// import axios from 'axios';

const tournamentRepository = new MongoTournamentRepository();
const tournamentService = new TournamentService(tournamentRepository);

export const getTournament = async (req: Request, res: Response) => {
  try {
    const { tournamentName } = req.params;
    const tournament = await tournamentService.getTournament(tournamentName);

    return res.status(200).json(tournament);
  } catch (error) {
    if (error instanceof Error) {
      res.status(400).json({ error: error.message });
    } else {
      res.status(400).json({ error: 'An unknown error occurred' });
    }
  }
};