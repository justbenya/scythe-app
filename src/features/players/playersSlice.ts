import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import omit from 'lodash-es/omit';
import { nanoid } from 'nanoid';
import { shuffle } from '../../common/utils';
import { fractions, mats, TOTAL_PLAYERS } from '../../ScytheLogic';
import { IPlayer, PlayersType } from './types';

const initialState: PlayersType = {};

const playersSlice = createSlice({
    name: 'players',
    initialState,
    reducers: {
        addPlayer(state): void {
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
                id: nanoid(),
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
    addPlayer,
    editPlayer,
    deletePlayer,
    deletePlayers,
} = playersSlice.actions;

export default playersSlice.reducer;
