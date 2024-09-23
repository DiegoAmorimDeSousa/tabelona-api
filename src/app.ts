import express from 'express';
import cors from 'cors';
import { addTeam } from './infrastructure/adapters/controllers/team';

const app = express();

app.use(cors({
  origin: 'https://make-lista-web.vercel.app',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  allowedHeaders: '*',
}));

app.use(express.json());

app.post('/team', addTeam);
// app.get('/itens', fetchItens);
// app.put('/itens', updateItem);

export default app;
