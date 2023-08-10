export type CharacterNoId = {
  isAlive: boolean;
  message: string;
  name: string;
  family: string;
  age: number;
  reignYears?: number;
  weapon?: string;
  skillLevel?: number;
  adviseTo?: CharacterNoId;
  serveLevel?: number;
  servesTo?: CharacterNoId;
};

export type Character = CharacterNoId & { id: number };
