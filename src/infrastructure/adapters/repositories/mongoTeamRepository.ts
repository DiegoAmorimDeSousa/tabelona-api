import { TeamRepositoryPort } from '../../../app/ports/teamRepositoryPort';
import { Tournament, Team, Tables, Season } from '../../../domain/entities';
import { createSeasonData, sortTables } from '../../../utils/tableUtils';
import { filterSeasonByName } from '../../../utils/tournamentUtils';
import TeamModel, { TeamDocument } from '../../models/teamModel';

export class MongoItemRepository implements TeamRepositoryPort {
  async getAllTeams(): Promise<Team[]> {
    const teamDocs = await TeamModel.find();
    const teams = teamDocs.map(doc => new Team(
      doc.id,
      doc.name,
      doc.logo,
      doc.slug,
      doc.updateAt,
      doc.address,
      doc.season
    ));

    return teams;
  }

  async getTables(): Promise<Tables[]> {
    const teamDocs = await TeamModel.find().select('name logo season');
    const serieABrasil: Tournament[] = [];
    const serieBBrasil: Tournament[] = [];
    const serieAMundo: Tournament[] = [];
    teamDocs.forEach((doc: TeamDocument) => {
      const getSerieABrasil = filterSeasonByName(doc.season, 'Série A - Brasil');
      const getSerieAMundo = filterSeasonByName(doc.season, 'Série A - Mundo');
      const getSerieBBrasil = filterSeasonByName(doc.season, 'Série B - Brasil');
      
      if (getSerieABrasil.length) {
        const season = getSerieABrasil[0];
        serieABrasil.push(createSeasonData(season, doc.logo, doc._id as string, doc?.name));
      }

      if (getSerieAMundo.length) {
        const season = getSerieAMundo[0];
        serieAMundo.push(createSeasonData(season, doc.logo, doc._id as string, doc?.name));
      }
  
      if (getSerieBBrasil.length) {
        const season = getSerieBBrasil[0];
        serieBBrasil.push(createSeasonData(season, doc.logo, doc._id as string, doc?.name));
      }   
    });

    const sortedTeamsSerieABrasil = sortTables(serieABrasil);
    const sortedTeamsSerieAMundo = sortTables(serieAMundo);
    const sortedTeamsSerieABBrasil = sortTables(serieBBrasil);

    return [new Tables(sortedTeamsSerieABrasil, sortedTeamsSerieABBrasil, sortedTeamsSerieAMundo)];
  }

  async getTeamBySlug(slug: string): Promise<Team | null> {
    const teamDoc = await TeamModel.findOne({ slug });
  
    if (!teamDoc) {
      return null;
    }
  
    const team = new Team(
      teamDoc.id,
      teamDoc.name,
      teamDoc.logo,
      teamDoc.slug,
      teamDoc.updateAt,
      teamDoc.address,
      teamDoc.season
    );
  
    return team;
  }

  async createTeam(item: Team): Promise<Team> {
    const itemDoc = new TeamModel({
      name: item.name,
      logo: item.logo,
      slug: item.slug,
      address: item.address,
      season: item.season.map((season: Season) => ({ 
        name: season.name,
        position: season.position,
        wins: season.wins,
        points: season.points,
        draws: season.draws,
        defeat: season.defeat,
        proGoals: season.proGoals,
        onwGoals: season.onwGoals,
        stagePlayOff: season.stagePlayOff,
        status: season.status,
      })),
    });
  
    await itemDoc.save();
  
    return new Team(
      itemDoc.id,
      itemDoc.name,
      itemDoc.logo,
      itemDoc.slug,
      itemDoc.updateAt,
      itemDoc.address,
      itemDoc.season.map(season => new Season(
        season.name,
        season.position,
        season.wins,
        season.points,
        season.draws,
        season.defeat,
        season.proGoals,
        season.onwGoals,
        season.stagePlayOff,
        season.status,
      ))
    );
  }
  

  async getTeam(_id: string): Promise<Team | null> {
    const itemDoc = await TeamModel.findOne({ _id: _id });
  
    if (!itemDoc) {
      return null; 
    }
  
    return new Team(
      itemDoc.id,
      itemDoc.name,
      itemDoc.logo,
      itemDoc.slug,
      itemDoc.updateAt,
      itemDoc.address,
      itemDoc.season
    );
  }

  async update(team: Team): Promise<Team | null> {
    const itemDoc = await TeamModel.findById(team.id);
  
    if (!itemDoc) {
      throw new Error('Team not found');
    }
  
    itemDoc.name = team.name;
    itemDoc.logo = team.logo;
    itemDoc.address = team.address;
    itemDoc.season = team.season.map(season => ({
      name: season.name,
      position: season.position,
      wins: season.wins,
      points: season.points,
      draws: season.draws,
      defeat: season.defeat,
      proGoals: season.proGoals,
      onwGoals: season.onwGoals,
      stagePlayOff: season.stagePlayOff,
      status: season.status,
    }));
    itemDoc.updateAt = team.updateAt;
  
    await itemDoc.save();
  
    return new Team(
      itemDoc.id,
      itemDoc.name,
      itemDoc.logo,
      itemDoc.slug, 
      itemDoc.updateAt, 
      itemDoc.address,
      itemDoc.season.map(season => new Season( 
        season.name,
        season.position,
        season.wins,
        season.points,
        season.draws,
        season.defeat,
        season.proGoals,
        season.onwGoals,
        season.stagePlayOff,
        season.status,
      ))
    );
  }  
}
