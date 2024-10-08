import express from 'express';
import cors from 'cors';
import { addTeam, getAllTeams, getTeamBySlug, updateTeam, getTable, fetchAllTeamsEndpoint } from './infrastructure/adapters/controllers/team';
import { getTournament, getTournamentByDate } from './infrastructure/adapters/controllers/tournament';

const app = express();

app.use(cors({
  origin: ['http://localhost:5173', 'https://tabelona-web.vercel.app'],
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  allowedHeaders: '*',
}));

app.use(express.json());

app.post('/team', addTeam);
app.get('/teams', getAllTeams);
app.get('/teams/cron', fetchAllTeamsEndpoint);
app.get('/teams/slug', getTeamBySlug);
app.put('/team', updateTeam);
app.get('/team/tables', getTable);
app.get('/tournament/:tournamentName', getTournament);
app.get('/events/:date', getTournamentByDate);

export default app;
