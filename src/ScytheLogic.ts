import { IPoints } from './pages/Score';

export const TOTAL_PLAYERS = 5;

export const fractions = [
    {
        value: 'Республика Поляния',
        label: 'Республика Поляния',
        color: '#fff'
    },
    {
        value: 'Саксонская империя',
        label: 'Саксонская империя',
    },
    {
        value: 'Крымское ханство',
        label: 'Крымское ханство',
    },
    {
        value: 'Северное королевство',
        label: 'Северное королевство',
    },
    {
        value: 'Руссветский союз',
        label: 'Руссветский союз',
    },
];

export const mats = [
    {
        value: 'Промышленный (1)',
        label: 'Промышленный (1)',
    },
    {
        value: 'Строительный (2)',
        label: 'Строительный (2)',
    },
    {
        value: 'Патриотический (3)',
        label: 'Патриотический (3)',
    },
    {
        value: 'Технический (4)',
        label: 'Технический (4)',
    },
    {
        value: 'Фермерский (5)',
        label: 'Фермерский (5)',
    },
];

export const calculatePoints = (points: IPoints): number => {
    let result = 0;

    if (points.popularity >= 0 || points.popularity <= 6) {
        result = (points.stars * 3) + (points.territories * 2) + Math.floor(points.resources / 2) + points.buildingBonuses + points.gold;
    } else if (points.popularity >= 7 || points.popularity <= 12) {
        result = (points.stars * 4) + (points.territories * 3) + Math.floor(points.resources / 2 * 2) + points.buildingBonuses + points.gold;
    } else if (points.popularity >= 13 || points.popularity <= 18) {
        result = (points.stars * 5) + (points.territories * 4) + Math.floor(points.resources / 2 * 3) + points.buildingBonuses + points.gold;
    }

    return result;
}
