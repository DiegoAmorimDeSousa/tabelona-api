import mongoose, { Document, Schema } from 'mongoose';

export interface TeamDocument extends Document {
  name: string;
  logo: string;
  slug: string;
  updateAt: string;
  address: {
    country: string;
    state: string;
    city: string;
  };
  season: {  // Isso deve ser um array
    name: string;
    position: number;
    wins: number;
    points: number;
    draws: number;
    defeat: number;
    proGoals: number;
    onwGoals: number;
    stagePlayOff: string;
    status: string;
  }[];
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

export default TeamModel;
