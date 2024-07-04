import { Request, Response } from 'express';
import { UserService } from '../../../app/services/userService';
import { MongoUserRepository } from '../repositories/mongoUserRepository';

const userRepository = new MongoUserRepository();
const userService = new UserService(userRepository);

export const addUser = async (req: Request, res: Response) => {
  try {
    const { name, email } = req.body;
    const user = await userService.createUser(name, email);
    res.status(201).json(user);
  } catch (error) {
    if (error instanceof Error) {
      res.status(400).json({ error: error.message });
    } else {
      res.status(400).json({ error: 'An unknown error occurred' });
    }
  }
};

export const fetchUsers = async (req: Request, res: Response) => {
  try {
    const users = await userService.getAllUsers();
    res.status(200).json(users);
  } catch (error) {
    if (error instanceof Error) {
      res.status(400).json({ error: error.message });
    } else {
      res.status(400).json({ error: 'An unknown error occurred' });
    }
  }
};
