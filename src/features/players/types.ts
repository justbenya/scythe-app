export interface IPlayer extends IPoints {
    id: string;
    name: string;
    faction: string;
    mat: string;
    points: number;
    gameEndPosition?: number;
}

export interface IPoints {
    gold: number;
    popularity: number;
    stars: number;
    territories: number;
    resources: number;
    buildingBonuses: number;
}

export type PlayersType = {
    [id: string]: IPlayer
}
