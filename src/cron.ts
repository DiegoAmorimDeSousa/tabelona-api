import { TeamService } from './app/services/teamService'; // Ajuste o caminho conforme necessário
import { MongoItemRepository } from './infrastructure/adapters/repositories/mongoItemRepository';

const itemRepository = new MongoItemRepository();
const teamService = new TeamService(itemRepository);

const fetchAllTeamsAutomatically = async () => {
  try {
    console.log('VOU FAZER O CRON');
    const teams = await teamService.getTables();
    console.log('Times obtidos automaticamente:', teams);
  } catch (error) {
    console.error('Erro ao obter times automaticamente:', error);
  }
};

fetchAllTeamsAutomatically();
