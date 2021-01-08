import { useLocalStorage, writeStorage } from '@rehooks/local-storage';
import { nanoid } from 'nanoid';
import React, { useEffect, useReducer } from 'react';
import { connect } from 'react-redux';
import { toast } from 'react-toastify';
import { addPlayer } from '../features/players/playersSlice';
import { fractions, mats, TOTAL_PLAYERS } from '../ScytheLogic';
import AppContext, { SpecType } from './AppContext';
import appReducer from './appReducer';
import { Action, Types } from './Types';


const AppProvider: React.FC = props => {
    const { children } = props;

    // @ts-ignore
    const [players, dispatch]: [players: SpecType, dispatch: React.Dispatch<Action>] = useReducer(appReducer, {});

    // LOAD FROM LocalStorage
    const [storagePlayers] = useLocalStorage<any>('players');

    // SAVE TO LocalStorage
    useEffect(() => { writeStorage('players', players); }, [players]);

    function fetchPlayer(id: string): void {
        if (storagePlayers) {
            dispatch({ type: Types.FETCH_PLAYER, payload: storagePlayers[id] });
        }
    }

    function fetchPlayers(): void {
        if (storagePlayers) {
            dispatch({ type: Types.FETCH_PLAYERS, payload: storagePlayers });
        }
    }

    function createPlayer(): void {

    }

    function editPlayer(formValues: any): void {

    }

    function deletePlayer(id: string): void {

    }

    function clearData(): void {
        // Object.values(players).forEach(player => deletePlayer(player.id));
    }

    return (
        <AppContext.Provider
            value={ {
                players,
                dispatch,
                fetchPlayer,
                fetchPlayers,
                createPlayer,
                editPlayer,
                deletePlayer,
                clearData,
            } }
        >
            { children }
        </AppContext.Provider>
    );
};

export default AppProvider;
