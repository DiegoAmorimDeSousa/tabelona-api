import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import logger from './utils/logger';
import { addTeam, getAllTeams, getTeamBySlug, updateTeam, getTable, fetchAllTeamsEndpoint } from './infrastructure/adapters/controllers/team';
import { getTournament, getTournamentByDate } from './infrastructure/adapters/controllers/tournament';

const app = express();

app.use(morgan('combined', {
  stream: {
    write: (message) => logger.info(message.trim())
  }
}));

app.use(cors({
  origin: ['http://localhost:5173', 'https://tabelona-web.vercel.app'],
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  allowedHeaders: '*',
}));

app.use(express.json());

app.use((req, res, next) => {
  logger.info(`Método: ${req.method} | URL: ${req.url} | Params: ${JSON.stringify(req.params)} | Body: ${JSON.stringify(req.body)}`);
  next();
});

app.post('/team', addTeam);
app.get('/teams', getAllTeams);
app.get('/teams/cron', fetchAllTeamsEndpoint);
app.get('/teams/slug', getTeamBySlug);
app.put('/team', updateTeam);
app.get('/team/tables', getTable);
app.get('/tournament', getTournament);
app.get('/events/:date', getTournamentByDate);

app.use((err: any, req: express.Request, res: express.Response, next: express.NextFunction) => {
  logger.error(`Erro: ${err.message} | Stack: ${err.stack}`);
  res.status(500).send('Internal Server Error');
});

export default app;
