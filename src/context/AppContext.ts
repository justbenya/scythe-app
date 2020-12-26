import React, { createContext } from 'react';
import { fractions, mats } from '../ScytheLogic';
import { Action, IPlayer } from './Types';

export type SpecType = {
    [id: string]: IPlayer
}

type AppContextType = {
    state: SpecType;
    pullFractions: string[];
    pullMats: string[];
    setFractionsPull: React.Dispatch<any>;
    setMatsPull: React.Dispatch<any>;
    dispatch: React.Dispatch<Action>;
    fetchPlayer(id: string): void;
    fetchPlayers(): void;
    createPlayer(formValues: { fraction: string; mat: string; }): void;
    editPlayer(formValues: any): void;
    deletePlayer(id: string): void;
}

const AppContext = createContext<AppContextType>({
    state: {},
    pullFractions: fractions,
    pullMats: mats,
    setFractionsPull: () => null,
    setMatsPull: () => null,
    dispatch: () => null,
    fetchPlayer: () => {},
    fetchPlayers: () => {},
    createPlayer: () => {},
    editPlayer: () => {},
    deletePlayer: () => {},
});

export default AppContext;
