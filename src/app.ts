import express from 'express';
import { addItens, fetchItens, updateItem } from './infrastructure/adapters/controllers/itemController';

const app = express();

app.use(express.json());
app.post('/itens', addItens);
app.get('/itens', fetchItens);
app.put('/itens', updateItem);

export default app;
