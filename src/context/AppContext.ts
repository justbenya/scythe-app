import React, { createContext } from 'react';
import { Action, IPlayer } from './Types';

const initialState = {
    players: [],
};

type AppContextType = {
    state: object;
    dispatch: React.Dispatch<Action>;
    fetchPlayer(id: string): void;
    fetchPlayers(): void;
    createPlayer(formValues: { fraction: string; mat: string; }): void;
    editPlayer(formValues: any): void;
    deletePlayer(id: string): void;
}

const AppContext = createContext<AppContextType>({
    state: initialState,
    dispatch: () => null,
    fetchPlayer: () => {},
    fetchPlayers: () => {},
    createPlayer: () => {},
    editPlayer: () => {},
    deletePlayer: () => {},
});

export default AppContext;
