import { useLocalStorage, writeStorage } from '@rehooks/local-storage';
import { nanoid } from 'nanoid';
import React, { useEffect, useReducer } from 'react';
import { TOTAL_PLAYERS } from '../ScytheLogic';
import AppContext from './AppContext';
import appReducer from './appReducer';
import { Action, Types } from './Types';

const AppProvider: React.FC = props => {
    const { children } = props;

    // @ts-ignore
    const [players, dispatch]: [players: object, dispatch: React.Dispatch<Action>] = useReducer(appReducer, {});

    // LOAD FROM LocalStorage
    const [storagePlayers] = useLocalStorage<any>('players');

    // SAVE TO LocalStorage
    useEffect(() => { writeStorage('players', players); }, [players]);

    function fetchPlayers(): void {
        if (storagePlayers) {
            dispatch({ type: Types.FETCH_PLAYERS, payload: storagePlayers });
        }
    }

    function fetchPlayer(id: string): void {
        if (storagePlayers) {
            dispatch({ type: Types.FETCH_PLAYER, payload: storagePlayers[id] });
        }
    }

    function createPlayer(formValues: { fraction: string; mat: string; }): void {
        if (Object.values(players).length >= TOTAL_PLAYERS) return;

        const player = {
            id: nanoid(),
            name: 'Player ' + (Object.values(players).length + 1),
            fraction: formValues.fraction,
            mat: formValues.mat,
            gold: 0,
            popularity: 0,
            stars: 0,
            territories: 0,
            resources: 0,
            buildingBonuses: 0,
            points: 0,
        };

        dispatch({ type: Types.CREATE_PLAYER, payload: player });
    }

    function editPlayer(formValues: any): void {
        dispatch({ type: Types.EDIT_PLAYER, payload: formValues });
    }

    function deletePlayer(id: string): void {
        dispatch({ type: Types.DELETE_PLAYER, payload: id });
    }

    return (
        <AppContext.Provider
            value={ {
                state: players,
                dispatch,
                fetchPlayer,
                fetchPlayers,
                createPlayer,
                editPlayer,
                deletePlayer
            } }
        >
            { children }
        </AppContext.Provider>
    );
};

export default AppProvider;
