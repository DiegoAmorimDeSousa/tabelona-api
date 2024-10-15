export class Season {
  constructor(
    public name: string,
    public position: number,
    public wins: number,
    public points: number,
    public draws: number, 
    public defeat: number,
    public proGoals: number,
    public onwGoals: number,
    public stagePlayOff: string,
    public status: string,
  ) {}
}