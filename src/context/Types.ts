import { IPoints } from '../pages/Score';

export enum Types {
    'FETCH_PLAYER',
    'CREATE_PLAYER',
    'EDIT_PLAYER',
    'FETCH_PLAYERS',
    'DELETE_PLAYER',
    'CLEAR_PLAYERS_DATA',
    'INIT'
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

type ActionClearPlayerType = {
    type: Types.CLEAR_PLAYERS_DATA;
}

type ActionInitType = {
    type: Types.INIT;
    payload: object;
}

export type Action = ActionFetchPlayerType
    | ActionFetchPlayersType
    | ActionCreatePlayerType
    | ActionEditPlayerType
    | ActionDeletePlayerType
    | ActionClearPlayerType;

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
