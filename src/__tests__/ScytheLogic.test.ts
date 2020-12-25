import { calculatePoints } from '../ScytheLogic';

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
    })

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
    })

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
    })
});
