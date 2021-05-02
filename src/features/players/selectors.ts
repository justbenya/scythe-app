import { createSelector } from '@reduxjs/toolkit';
import _ from 'lodash';
import { RootState } from '../../app/rootReducer';
import { factionsMoveOrder, findEngNameFactionToUrl, mats } from '../../common/scytheLogic';
import { IPlayer } from './types';

export const getPlayers = (state: RootState) => Object.values(state.players);

export const getPlayerWhoHasFirstTurn = createSelector(
  [getPlayers],
  (players: IPlayer[]) => {
    for (const mat of mats) {
      const playerFirstTurn = players.find(player => player.mat === mat.name);
      if (playerFirstTurn) {
        return playerFirstTurn;
      }
    }
    return null;
  });

export const getPlayersSortByFirstTurn = createSelector(
  [getPlayers, getPlayerWhoHasFirstTurn],
  (players: IPlayer[], player: IPlayer | null) => {
    const playerFirstTurnIndex = factionsMoveOrder.indexOf(player?.faction as string);
    let turnOrder: (string | undefined)[] = [];

    const isFound = playerFirstTurnIndex !== -1;

    if (isFound) {
      const reversedMoveOrder = factionsMoveOrder
        .map((item, index) => {
          return _.nth(factionsMoveOrder, playerFirstTurnIndex - index);
        })
        .filter(faction => players.find(it => it.faction === faction));
      const fistElement = reversedMoveOrder.slice(0, 1);
      const other = reversedMoveOrder.slice(1, reversedMoveOrder.length).reverse();
      turnOrder = [...fistElement, ...other];
    }

    return turnOrder.map(item => players.find(player => player.faction === item)) as IPlayer[];
  });

export const getPlayerByFaction = (faction: string) => createSelector(
  [getPlayers],
  (players: IPlayer[]) => {
    return players.find(item => findEngNameFactionToUrl(item.faction) === faction);
  },
);
