import keyBy from 'lodash-es/keyBy';
import { IPlayer, IPoints } from '../features/players/types';
import { routes } from '../routes';
import { clearPath } from './utils';

export const TOTAL_PLAYERS = 5;

export const factionsMoveOrder = [
    'Республика Поляния',
    'Северное королевство',
    'Руссветский союз',
    'Крымское ханство',
    'Саксонская империя',
];

export type FactionType = 'polania' | 'saxony' | 'crimean' | 'nordic' | 'rusviet';

export const factions = [
    {
        name: 'Республика Поляния',
        shortName: 'Поляния',
        slug: 'polania',
        characterPath: `${ process.env.PUBLIC_URL }/assets/factions/polania.jpg`,
        iconPath: `${ process.env.PUBLIC_URL }/assets/icons/factions/polania.png`,
    },
    {
        name: 'Саксонская империя',
        shortName: 'Саксония',
        slug: 'saxony',
        characterPath: `${ process.env.PUBLIC_URL }/assets/factions/saxony.jpg`,
        iconPath: `${ process.env.PUBLIC_URL }/assets/icons/factions/saxony.png`,
    },
    {
        name: 'Крымское ханство',
        shortName: 'Крым',
        slug: 'crimean',
        characterPath: `${ process.env.PUBLIC_URL }/assets/factions/crimean.jpg`,
        iconPath: `${ process.env.PUBLIC_URL }/assets/icons/factions/crimean.png`,
    },
    {
        name: 'Северное королевство',
        shortName: 'Север',
        slug: 'nordic',
        characterPath: `${ process.env.PUBLIC_URL }/assets/factions/nordic.jpg`,
        iconPath: `${ process.env.PUBLIC_URL }/assets/icons/factions/nordic.png`,
    },
    {
        name: 'Руссветский союз',
        shortName: 'Руссвет',
        slug: 'rusviet',
        characterPath: `${ process.env.PUBLIC_URL }/assets/factions/rusviet.jpg`,
        iconPath: `${ process.env.PUBLIC_URL }/assets/icons/factions/rusviet.png`,
    },
];

export const mats = [
    {
        name: 'Промышленный (1)',
        imgPath: `${ process.env.PUBLIC_URL }/assets/mats/industrial1.jpg`,
    },
    {
        name: 'Строительный (2)',
        imgPath: `${ process.env.PUBLIC_URL }/assets/mats/engineering2.jpg`,
    },
    {
        name: 'Патриотический (3)',
        imgPath: `${ process.env.PUBLIC_URL }/assets/mats/patriotic3.jpg`,
    },
    {
        name: 'Технический (4)',
        imgPath: `${ process.env.PUBLIC_URL }/assets/mats/mechanical4.jpg`,
    },
    {
        name: 'Фермерский (5)',
        imgPath: `${ process.env.PUBLIC_URL }/assets/mats/argicultural5.jpg`,
    },
];

export const resources = [
    { name: 'Популярность', imgPath: `${ process.env.PUBLIC_URL }/assets/icons/resources/popularity.png` },
    { name: 'Звезд', imgPath: `${ process.env.PUBLIC_URL }/assets/icons/resources/stars.png` },
    { name: 'Территорий', imgPath: `${ process.env.PUBLIC_URL }/assets/icons/resources/territories.png` },
    { name: 'Ресурсов', imgPath: `${ process.env.PUBLIC_URL }/assets/icons/resources/resources.png` },
    { name: 'Бонусов зданий', imgPath: `${ process.env.PUBLIC_URL }/assets/icons/resources/structureBonus.png` },
    { name: 'Монет', imgPath: `${ process.env.PUBLIC_URL }/assets/icons/resources/gold.png` },
];

export const structureBonus = [
    'Количество территорий с туннелями',
    'Количество озёр',
    'Количество территорий с символами приключений',
    'Количество территорий с туннелями и вашими зданиями',
    'Количество ваших зданий построенных в один ряд',
    'Количество тундр и ферм с вашими зданиями',
];

export function calculatePoints(points: IPoints): number {
    let result = 0;

    if (points.popularity >= 0 && points.popularity <= 6) {
        result = (points.stars * 3) + (points.territories * 2) + Math.floor(points.resources / 2) + points.buildingBonuses + points.gold;
    } else if (points.popularity >= 7 && points.popularity <= 12) {
        result = (points.stars * 4) + (points.territories * 3) + Math.floor(points.resources / 2) * 2 + points.buildingBonuses + points.gold;
    } else if (points.popularity >= 13 && points.popularity <= 18) {
        result = (points.stars * 5) + (points.territories * 4) + Math.floor(points.resources / 2) * 3 + points.buildingBonuses + points.gold;
    }

    return result;
}

export function findPlayerByFaction(players: IPlayer[], searchWord: string): IPlayer {
    return players.find(item => findEngNameFactionToUrl(item.faction) === searchWord) as IPlayer;
}

export function findEngNameFactionToUrl(faction: string = ''): string {
    const dictionaryByFactionNames = keyBy(factions, 'name');
    return dictionaryByFactionNames[faction].slug ? dictionaryByFactionNames[faction].slug : '';
}

export function getShortNameFaction(faction: string = ''): string {
    const dictionaryByFactionNames = keyBy(factions, 'name');
    return dictionaryByFactionNames[faction].shortName ? dictionaryByFactionNames[faction].shortName : '';
}

export function getLastAddedFaction(players: IPlayer[]): string {
    if (players.length <= 0) return '';
    const lastAddedPlayer = players[players.length - 1];
    return findEngNameFactionToUrl(lastAddedPlayer.faction);
}

export function getRouteLastAddedPlayer(players: IPlayer[]) {
    const lastAddedPlayer = players[players.length - 1];
    const homePage = clearPath(routes['index'].path);
    return `${ homePage }${ findEngNameFactionToUrl(lastAddedPlayer.faction) }`;
}

export function findFactionWhoHasFirstTurn(players: IPlayer[]): string {
    for (const mat of mats) {
        const playerFirstTurn = players.find(player => player.mat === mat.name);
        if (playerFirstTurn) {
            return findEngNameFactionToUrl(playerFirstTurn.faction);
        }
    }
    return '';
}

export function foundPrevNextPlayers(players: IPlayer[] = [], player: IPlayer) {
    const currentIndex = players.findIndex(item => item.id === player.id);

    const last = players[players.length - 1];
    const first = players[0];

    const prevPlayer = currentIndex >= 0 && players[currentIndex - 1] ? players[currentIndex - 1] : last;
    const nextPlayer = currentIndex >= 0 && players[currentIndex + 1] ? players[currentIndex + 1] : first;

    return {
        prevPlayer,
        nextPlayer,
    };
}


export function foundPlayerIndexByFaction(players: IPlayer[], searchFaction: FactionType) {
    const factions = players.map(player => findEngNameFactionToUrl(player.faction));
    const index = factions.findIndex(faction => faction === searchFaction);
    return index <= 0 ? 0 : index;
}
