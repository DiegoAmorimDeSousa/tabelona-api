import { TeamRepositoryPort } from '../../../app/ports/teamRepositoryPort';
import { Team } from '../../../domain/entities/team';
import mongoose, { Document, Schema } from 'mongoose';

interface TeamDocument extends Document {
  name: string;
  logo: string;
  slug: string;
  updateAt: string;
  address: {
    country: string;
    state: string;
    city: string;
  };
  season: [
    {
      name: string;
      position: number;
      wins: number;
      points: number;
      draws: number;
      defeat: number;
      proGoals: number;
      onwGoals: number;
      stagePlayOff?: string;
      status: string;
    }
  ];
}

const teamSchema = new Schema<TeamDocument>({
  name: { type: String, required: true },
  logo: { type: String, required: true },
  slug: { type: String, required: true },
  updateAt: { type: String, required: false },
  address: {
    country: { type: String, required: true },
    state: { type: String, required: true },
    city: { type: String, required: true },
  },
  season: [
    {
      name: { type: String, required: true },
      position: { type: Number, required: true },
      wins: { type: Number, required: true },
      points: { type: Number, required: true },
      draws: { type: Number, required: true },
      defeat: { type: Number, required: true },
      proGoals: { type: Number, required: true },
      onwGoals: { type: Number, required: true },
      stagePlayOff: { type: String, required: false },
      status: { type: String, required: true }
    }
  ]
});

const TeamModel = mongoose.model<TeamDocument>('Team', teamSchema);

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

  async getTables(): Promise<any> {
    const teamDocs = await TeamModel.find().select('name logo season');
    const serieABrasil: any = [];
    const serieBBrasil: any = [];
    const teams = teamDocs.map((doc: any) => {
      const getSerieABrasil = doc.season.filter((season: any) => season.name === 'Série A - Brasil');
      const getSerieBBrasil = doc.season.filter((season: any) => season.name === 'Série B - Brasil');
      
      if(getSerieABrasil.length) serieABrasil.push({...getSerieABrasil[0]?._doc, name: doc.name})
      if(getSerieBBrasil.length) serieBBrasil.push({...getSerieBBrasil[0]?._doc, name: doc.name})

      const team = new Team(
        doc.id,
        doc.name,
        doc.logo,
        doc.slug,
        doc.address,
        doc.updateAt,
        doc.season 
      );
    
      return {
        team,
      };
    });

    const sortedTeamsSerieABrasil = serieABrasil.sort((a: any, b: any) => {
      if (b.points !== a.points) return b.points - a.points;
      if (b.wins !== a.wins) return b.wins - a.wins;
      if (b.proGoals !== a.proGoals) return b.proGoals - a.proGoals;
      if (a.onwGoals !== b.onwGoals) return a.onwGoals - b.onwGoals;
      if (a.draws !== b.draws) return a.draws - b.draws;
      if (a.position !== b.position) return a.position - b.position;
    
      return 0;
    });

    const sortedTeamsSerieABBrasil = serieBBrasil.sort((a: any, b: any) => {
      if (b.points !== a.points) return b.points - a.points;
      if (b.wins !== a.wins) return b.wins - a.wins;
      if (b.proGoals !== a.proGoals) return b.proGoals - a.proGoals;
      if (a.onwGoals !== b.onwGoals) return a.onwGoals - b.onwGoals;
      if (a.draws !== b.draws) return a.draws - b.draws;
      if (a.position !== b.position) return a.position - b.position;
    
      return 0;
    });

    return [{serieABrasil: sortedTeamsSerieABrasil, serieBBrasil: sortedTeamsSerieABBrasil}];
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
      season: item.season,
    });

    await itemDoc.save();

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
    itemDoc.season = team.season;
    itemDoc.updateAt = team.updateAt;
  
    await itemDoc.save();
  
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
}
