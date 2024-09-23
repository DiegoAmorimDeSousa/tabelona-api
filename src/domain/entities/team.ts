export class Team {
  constructor(
    public id: string,
    public name: string,
    public logo: string,
    public address: {
      country: string,
      state: string,
      city: string,
    },
    public season: [
      {
        name: string,
        position: number,
        wins: number,
        points: number,
        draws: number,
        defeat: number,
        proGoals: number,
        onwGoals: number,
        stagePlayOff?: string,
        status: string
      }
    ],
  ) {}
}
