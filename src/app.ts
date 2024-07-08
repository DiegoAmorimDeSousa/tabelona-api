import express from 'express';
import { addItens, fetchItens } from './infrastructure/adapters/controllers/itemController';

const app = express();

app.use(express.json());
app.post('/itens', addItens);
app.get('/itens', fetchItens);

export default app;
