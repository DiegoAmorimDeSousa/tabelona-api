import { Season } from "./Season";

export interface Address {
  country: string;
  state: string;
  city: string;
}

export class Team {
  constructor(
    public id: string,
    public name: string,
    public logo: string,
    public slug: string,
    public updateAt: string,
    public address: Address,
    public season: Season[]
  ) {}
}
