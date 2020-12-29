export const TOTAL_PLAYERS = 5;

export const fractions = [
    {
        name: 'Республика Поляния',
        nameEng: 'polania',
        characterPath: `${ process.env.PUBLIC_URL }/assets/fractions/polania.jpg`,
        iconPath: `${ process.env.PUBLIC_URL }/assets/icons/fractions/polania.png`,
    },
    {
        name: 'Саксонская империя',
        nameEng: 'saxony',
        characterPath: `${ process.env.PUBLIC_URL }/assets/fractions/saxony.jpg`,
        iconPath: `${ process.env.PUBLIC_URL }/assets/icons/fractions/saxony.png`,
    },
    {
        name: 'Крымское ханство',
        nameEng: 'crimean',
        characterPath: `${ process.env.PUBLIC_URL }/assets/fractions/crimean.jpg`,
        iconPath: `${ process.env.PUBLIC_URL }/assets/icons/fractions/crimean.png`,
    },
    {
        name: 'Северное королевство',
        nameEng: 'nordic',
        characterPath: `${ process.env.PUBLIC_URL }/assets/fractions/nordic.jpg`,
        iconPath: `${ process.env.PUBLIC_URL }/assets/icons/fractions/nordic.png`,
    },
    {
        name: 'Руссветский союз',
        nameEng: 'rusvet',
        characterPath: `${ process.env.PUBLIC_URL }/assets/fractions/rusvet.jpg`,
        iconPath: `${ process.env.PUBLIC_URL }/assets/icons/fractions/rusvet.png`,
    },
];

export const mats = [
    'Промышленный (1)',
    'Строительный (2)',
    'Патриотический (3)',
    'Технический (4)',
    'Фермерский (5)',
];

export const structureBonus = [
    'Количество территорий с туннелями',
    'Количество озёр',
    'Количество территорий с символами приключений',
    'Количество территорий с туннелями и вашими зданиями',
    'Количество ваших зданий построенных в один ряд',
    'Количество тундр и ферм с вашими зданиями',
];

export const calculatePoints = (points: IPoints): number => {
    let result = 0;

    if (points.popularity >= 0 && points.popularity <= 6) {
        result = (points.stars * 3) + (points.territories * 2) + Math.floor(points.resources / 2) + points.buildingBonuses + points.gold;
    } else if (points.popularity >= 7 && points.popularity <= 12) {
        result = (points.stars * 4) + (points.territories * 3) + Math.floor(points.resources / 2) * 2 + points.buildingBonuses + points.gold;
    } else if (points.popularity >= 13 && points.popularity <= 18) {
        result = (points.stars * 5) + (points.territories * 4) + Math.floor(points.resources / 2) * 3 + points.buildingBonuses + points.gold;
    }

    return result;
};

export interface IPlayer extends IPoints {
    id: string;
    name: string;
    fraction: string;
    mat: string;
    points: number;
    gameEndPosition?: number;
}

export interface IPoints {
    gold: number;
    popularity: number;
    stars: number;
    territories: number;
    resources: number;
    buildingBonuses: number;
}
