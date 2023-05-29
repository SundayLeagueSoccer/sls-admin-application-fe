export type playerIdType = {
  _id: string;
  name: string;
  alias: string;
};

export type playerStatLine = {
  playerId: string;
  name: string;
  goals?: number;
  assists?: number;
  cleanSheets?: number;
  yellowCards?: number;
  redCards?: number;
};
