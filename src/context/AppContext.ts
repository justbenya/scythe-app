import React, { createContext } from 'react';
import { Action, IPlayer } from './Types';

export type SpecType = {
    [id: string]: IPlayer
}

type AppContextType = {
    state: SpecType;
    dispatch: React.Dispatch<Action>;
    fetchPlayer(id: string): void;
    fetchPlayers(): void;
    createPlayer(): void;
    editPlayer(formValues: any): void;
    deletePlayer(id: string): void;
    clearData(): void;
}

const AppContext = createContext<AppContextType>({
    state: {},
    dispatch: () => null,
    fetchPlayer: () => {},
    fetchPlayers: () => {},
    createPlayer: () => {},
    editPlayer: () => {},
    deletePlayer: () => {},
    clearData: () => {},
});

export default AppContext;
