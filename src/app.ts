import express from 'express';
import { addUser, fetchUsers } from './infrastructure/adapters/controllers/userController';

const app = express();

app.use(express.json());
app.post('/users', addUser);
app.get('/users', fetchUsers);

export default app;
