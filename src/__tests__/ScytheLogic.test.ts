import { calculatePoints, findTurnOrder } from '../common/scytheLogic';
import { IPlayer } from '../features/players/types';

describe('basic calculating points', () => {
    test('first', () => {
        expect(calculatePoints({
            gold: 1,
            popularity: 1,
            stars: 1,
            territories: 1,
            resources: 1,
            buildingBonuses: 2,
        })).toBe(8);
    });

    test('pc', () => {
        expect(calculatePoints({
            gold: 27,
            popularity: 7,
            stars: 5,
            territories: 5,
            resources: 23,
            buildingBonuses: 2,
        })).toBe(86);

        expect(calculatePoints({
            gold: 21,
            popularity: 2,
            stars: 6,
            territories: 8,
            resources: 18,
            buildingBonuses: 4,
        })).toBe(68);

        expect(calculatePoints({
            gold: 31,
            popularity: 10,
            stars: 4,
            territories: 2,
            resources: 2,
            buildingBonuses: 0,
        })).toBe(55);
    });

    test('mobile', () => {
        expect(calculatePoints({
            gold: 39,
            popularity: 18,
            stars: 5,
            territories: 7,
            resources: 27,
            buildingBonuses: 2,
        })).toBe(133);

        expect(calculatePoints({
            gold: 26,
            popularity: 18,
            stars: 6,
            territories: 8,
            resources: 33,
            buildingBonuses: 6,
        })).toBe(142);
    });
});

describe('start move order', () => {
    test('2 players', () => {
        const players: IPlayer[] = [
            {
                id: '1',
                name: 'Player 1',
                faction: 'Республика Поляния',
                mat: 'Строительный (2)',
                points: 0,
                gold: 0,
                popularity: 0,
                stars: 0,
                territories: 0,
                resources: 0,
                buildingBonuses: 0,
            },
            {
                id: '2',
                name: 'Player 2',
                faction: 'Крымское ханство',
                mat: 'Промышленный (1)',
                points: 0,
                gold: 0,
                popularity: 0,
                stars: 0,
                territories: 0,
                resources: 0,
                buildingBonuses: 0,
            },
        ];

        expect(findTurnOrder(players).map(i => i?.faction))
            .toStrictEqual(['Крымское ханство', 'Республика Поляния']);
    });

    test('5 players', () => {
        const players: IPlayer[] = [
            {
                id: '1',
                name: 'Player 1',
                faction: 'Республика Поляния',
                mat: 'Строительный (2)',
                points: 0,
                gold: 0,
                popularity: 0,
                stars: 0,
                territories: 0,
                resources: 0,
                buildingBonuses: 0,
            },
            {
                id: '2',
                name: 'Player 2',
                faction: 'Крымское ханство',
                mat: 'Промышленный (1)',
                points: 0,
                gold: 0,
                popularity: 0,
                stars: 0,
                territories: 0,
                resources: 0,
                buildingBonuses: 0,
            },
            {
                id: '3',
                name: 'Player 3',
                faction: 'Северное королевство',
                mat: 'Патриотический (3)',
                points: 0,
                gold: 0,
                popularity: 0,
                stars: 0,
                territories: 0,
                resources: 0,
                buildingBonuses: 0,
            },
            {
                id: '4',
                name: 'Player 4',
                faction: 'Руссветский союз',
                mat: 'Фермерский (5)',
                points: 0,
                gold: 0,
                popularity: 0,
                stars: 0,
                territories: 0,
                resources: 0,
                buildingBonuses: 0,
            },
            {
                id: '5',
                name: 'Player 5',
                faction: 'Саксонская империя',
                mat: 'Технический (4)',
                points: 0,
                gold: 0,
                popularity: 0,
                stars: 0,
                territories: 0,
                resources: 0,
                buildingBonuses: 0,
            },
        ];

        expect(findTurnOrder(players).map(i => i?.faction))
            .toStrictEqual(['Крымское ханство', 'Саксонская империя', 'Республика Поляния', 'Северное королевство', 'Руссветский союз']);
    });

    test('4 players', () => {
        const players: IPlayer[] = [
            {
                id: '1',
                name: 'Player 1',
                faction: 'Республика Поляния',
                mat: 'Промышленный (1)',
                points: 0,
                gold: 0,
                popularity: 0,
                stars: 0,
                territories: 0,
                resources: 0,
                buildingBonuses: 0,
            },
            {
                id: '2',
                name: 'Player 2',
                faction: 'Северное королевство',
                mat: 'Строительный (2)',
                points: 0,
                gold: 0,
                popularity: 0,
                stars: 0,
                territories: 0,
                resources: 0,
                buildingBonuses: 0,
            },
            {
                id: '3',
                name: 'Player 3',
                faction: 'Руссветский союз',
                mat: 'Патриотический (3)',
                points: 0,
                gold: 0,
                popularity: 0,
                stars: 0,
                territories: 0,
                resources: 0,
                buildingBonuses: 0,
            },

            {
                id: '4',
                name: 'Player 4',
                faction: 'Крымское ханство',
                mat: 'Технический (4)',
                points: 0,
                gold: 0,
                popularity: 0,
                stars: 0,
                territories: 0,
                resources: 0,
                buildingBonuses: 0,
            },
            {
                id: '5',
                name: 'Player 5',
                faction: 'Саксонская империя',
                mat: 'Фермерский (5)',
                points: 0,
                gold: 0,
                popularity: 0,
                stars: 0,
                territories: 0,
                resources: 0,
                buildingBonuses: 0,
            },
        ];

        expect(findTurnOrder(players).map(i => i?.faction))
            .toStrictEqual(['Республика Поляния', 'Северное королевство', 'Руссветский союз', 'Крымское ханство', 'Саксонская империя']);
    });
});
