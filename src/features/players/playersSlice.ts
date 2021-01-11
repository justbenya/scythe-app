import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import omit from 'lodash-es/omit';
import { nanoid } from 'nanoid';
import { foundEngNameFractionToUrl, fractions, mats, TOTAL_PLAYERS } from '../../common/scytheLogic';
import { shuffle } from '../../common/utils';
import history from '../../history';
import { routes } from '../../routes';
import { AppThunk } from '../../store';
import { IPlayer, PlayersType } from './types';

const initialState: PlayersType = {};

const playersSlice = createSlice({
    name: 'players',
    initialState,
    reducers: {
        createPlayer: {
            reducer: (state, action: PayloadAction<{ id: string }>) => {
                if (Object.values(state).length >= TOTAL_PLAYERS) {
                    return;
                }

                // 1. Получить уже используемые фракции и планшеты
                const usedFraction = Object.values(state).map(i => i.fraction);
                const usedMats = Object.values(state).map(i => i.mat);

                // 2. Рандомно выберем фракции и планшеты, уберем уже используемые
                const randomFractions = shuffle(fractions.map(i => i.name)).filter(i => !usedFraction.includes(i));
                const randomMats = shuffle(mats).filter(i => !usedMats.includes(i));

                // 3. Готово!
                const fraction = randomFractions[0];
                const mat = randomMats[0];

                const player = {
                    id: action.payload.id,
                    name: 'Player ' + (Object.values(state).length + 1),
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

                state[player.id] = player;
            },
            prepare: () => {
                const id = nanoid();
                return { payload: { id } };
            },
        },

        editPlayer(state, action: PayloadAction<IPlayer>) {
            return { ...state, [action.payload.id]: action.payload };
        },

        deletePlayer(state, action: PayloadAction<string>) {
            return omit(state, action.payload);
        },

        deletePlayers() {
            return {};
        },

    },
});

export const {
    createPlayer,
    editPlayer,
    deletePlayer,
    deletePlayers,
} = playersSlice.actions;

export const addPlayer = (): AppThunk => {
    return async (dispatch, getState) => {
        dispatch(createPlayer());

        const players = Object.values(getState().players);
        const lastAddedPlayer = players[players.length - 1];
        history.push(`${ routes['index'].path }${ foundEngNameFractionToUrl(lastAddedPlayer.fraction) }`);
    };
};

export default playersSlice.reducer;
