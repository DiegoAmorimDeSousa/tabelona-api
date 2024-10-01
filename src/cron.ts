import { TeamService } from './app/services/teamService'; 
import { MongoItemRepository } from './infrastructure/adapters/repositories/mongoItemRepository';
import { connectDB } from './infrastructure/config/database';

const itemRepository = new MongoItemRepository();
const teamService = new TeamService(itemRepository);

const fetchAllTeamsAutomatically = async () => {
  try {
    connectDB().then(() => {
      console.log('CONECTADO NO MONGO')
    })
    console.log('VOU FAZER O CRON');
    const teams = await teamService.getTables();
    console.log('Times obtidos automaticamente:', teams);
  } catch (error) {
    console.error('Erro ao obter times automaticamente:', error);
  }
};

(async () => {
  await fetchAllTeamsAutomatically();
})();
