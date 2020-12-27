import { IPlayer } from '../ScytheLogic';

export enum Types {
    'FETCH_PLAYER',
    'CREATE_PLAYER',
    'EDIT_PLAYER',
    'FETCH_PLAYERS',
    'DELETE_PLAYER',
    'CLEAR_PLAYERS_DATA',
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

export type Action = ActionFetchPlayerType
    | ActionFetchPlayersType
    | ActionCreatePlayerType
    | ActionEditPlayerType
    | ActionDeletePlayerType
    | ActionClearPlayerType;
