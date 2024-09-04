import express from 'express';
import cors from 'cors';
import { addItens, fetchItens, updateItem } from './infrastructure/adapters/controllers/itemController';

const app = express();

app.use(cors({
  origin: 'https://make-lista-web.vercel.app/',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  allowedHeaders: '*',
}));

app.use(express.json());

app.post('/itens', addItens);
app.get('/itens', fetchItens);
app.put('/itens', updateItem);

export default app;
