import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import { createUser, getUserByUsernameAndPassword } from '../services/userServices';

const JWT_SECRET_KEY = 'your_secret_key_here'; 

export const createUserController = async (req: Request, res: Response): Promise<void> => {
  const { username, password, isSuperAdmin } = req.body;

  try {
    const user = await createUser(username, password, isSuperAdmin);
    res.status(201).json({ user });
  } catch (error: unknown) {
    console.error('Error creating user:', error);
    res.status(400).json({ error: (error as Error).message });
  }
};

export const loginUserController = async (req: Request, res: Response): Promise<void> => {
  const { username, password } = req.body;

  try {
    const user = await getUserByUsernameAndPassword(username, password);

    if (!user) {
      res.status(401).json({ error: 'Invalid username or password' });
      return;
    }

    
    const token = jwt.sign({ username: user.username, isSuperAdmin: user.isSuperAdmin }, JWT_SECRET_KEY);

    res.status(200).json({ user, token });
  } catch (error: unknown) {
    console.error('Error authenticating user:', error);
    res.status(400).json({ error: (error as Error).message });
  }
};
