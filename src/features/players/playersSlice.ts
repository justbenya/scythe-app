import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import omit from 'lodash-es/omit';
import { nanoid } from 'nanoid';
import { AppThunk } from '../../app/store';
import {
    calculatePoints,
    factions,
    findEngNameFactionToUrl,
    getRouteLastAddedPlayer,
    mats,
    TOTAL_PLAYERS,
} from '../../common/scytheLogic';
import { clearPath, shuffle } from '../../common/utils';
import history from '../../history';
import { routes } from '../../routes';
import { IPlayer, IPoints, PlayersType } from './types';

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
                const usedFaction = Object.values(state).map(i => i.faction);
                const usedMats = Object.values(state).map(i => i.mat);

                // 2. Рандомно выберем фракции и планшеты, уберем уже используемые
                const randomFactions = shuffle(factions).filter(faction => !usedFaction.includes(faction.name));
                const randomMats = shuffle(mats).filter(mat => !usedMats.includes(mat.name));

                // 3. Готово!
                const faction = randomFactions[0].name;
                const mat = randomMats[0].name;

                const player = {
                    id: action.payload.id,
                    name: 'Player ' + (Object.values(state).length + 1),
                    faction,
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

        removePlayer(state, action: PayloadAction<string>) {
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
    removePlayer,
    deletePlayers,
} = playersSlice.actions;

export const scoreFormSubmit = (player: IPlayer, formData: IPoints, nextPlayer: IPlayer): AppThunk => {
    return (dispatch, getState) => {
        const points = calculatePoints(formData);

        dispatch(editPlayer({
            ...player,
            ...formData,
            points,
        }));

        const players = Object.values(getState().players);
        if (players.every(player => player.points > 0)) {
            history.push(routes.result.path);
        } else {
            history.push(`${ clearPath(routes.score.path) }${ findEngNameFactionToUrl(nextPlayer.faction) }`);
        }
    }
}

export const addPlayer = (): AppThunk => {
    return async (dispatch, getState) => {
        dispatch(createPlayer());
        const players = Object.values(getState().players);
        const path = getRouteLastAddedPlayer(players);
        history.push(path);
    };
};

export const changeFactionPlayer = (player: IPlayer): AppThunk => {
    return (dispatch) => {
        dispatch(editPlayer(player));
        history.push(`${ clearPath(routes.index.path) }${ findEngNameFactionToUrl(player.faction) }`);
    };
};

export const deletePlayer = (id: string): AppThunk => {
    return (dispatch => {
        dispatch(removePlayer(id));
        history.push(clearPath(routes['index'].path));
    });
};

export const deleteAllPlayers = (): AppThunk => {
    return (dispatch => {
        dispatch(deletePlayers());
        history.push('/');
    });
};

export default playersSlice.reducer;
