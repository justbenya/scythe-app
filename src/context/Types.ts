import { IPoints } from '../pages/Score';

export enum Types {
    'FETCH_PLAYER',
    'CREATE_PLAYER',
    'EDIT_PLAYER',
    'FETCH_PLAYERS',
    'DELETE_PLAYER',
}

type ActionFetchPlayerType = {
    type: Types.FETCH_PLAYER;
    payload: IPlayer;
}

type ActionFetchPlayersType = {
    type: Types.FETCH_PLAYERS;
    payload: IPlayer[];
}

type ActionCreatePlayerType = {
    type: Types.CREATE_PLAYER;
    payload: IPlayer;
}

type ActionEditPlayerType = {
    type: Types.EDIT_PLAYER;
    payload: IPlayer;
}

type ActionDeletePlayerType = {
    type: Types.DELETE_PLAYER;
    payload: string;
}

export type Action = ActionFetchPlayerType | ActionFetchPlayersType | ActionCreatePlayerType | ActionEditPlayerType | ActionDeletePlayerType;
    // | { type: Types.FETCH_PLAYER, payload: undefined }
    // | { type: Types.FETCH_PLAYERS, payload: IPlayer[] }
    // | { type: Types.UPDATE_PLAYERS, payload: IPlayer[] }
    // | { type: Types.SET_POINTS, payload: { index: number, points: IPoints } }


export interface IPlayer extends IPoints {
    id: string;
    name: string;
    fraction: string;
    mat: string;
    points: number;
}

export type InitialStateType = {
    players: IPlayer[];
}
