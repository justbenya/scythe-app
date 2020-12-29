import { useLocalStorage, writeStorage } from '@rehooks/local-storage';
import keyBy from 'lodash-es/keyBy';
import React, { useEffect, useReducer } from 'react';
import { fractions, mats, TOTAL_PLAYERS } from '../ScytheLogic';
import AppContext, { SpecType } from './AppContext';
import appReducer from './appReducer';
import { Action, Types } from './Types';


function shuffle(array: any): Array<any> {
    const result = [...array];
    for (let i = result.length - 1; i > 0; i--) {
        let randIndex = Math.floor(Math.random() * (i + 1));
        let temp = result[i];
        result[i] = result[randIndex];
        result[randIndex] = temp;
    }
    return result;
}

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
        if (Object.values(players).length >= TOTAL_PLAYERS) {
            toast.error('🔥 Максимальное количество игроков: 5', {
                position: 'bottom-right',
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });

            return;
        } else {
            toast.success('✔ Добавлен игрок', {
                position: 'bottom-right',
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }

        // 1. Получить уже используемые фракции и планшеты
        const usedFraction = Object.values(players).map(i => i.fraction);
        const usedMats = Object.values(players).map(i => i.mat);

        // 2. Рандомно выберем фракции и планшеты, уберем уже используемые
        const randomFractions = shuffle(fractions.map(i => i.name)).filter(i => !usedFraction.includes(i));
        const randomMats = shuffle(mats).filter(i => !usedMats.includes(i));

        // 3. Готово!
        const fraction = randomFractions[0];
        const mat = randomMats[0];

        const player = {
            id: keyBy(fractions, 'name')[fraction].nameEng,
            name: 'Player ' + (Object.values(players).length + 1),
            fraction,
            mat,
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

    function clearData(): void {
        Object.values(players).forEach(player => deletePlayer(player.id));
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
