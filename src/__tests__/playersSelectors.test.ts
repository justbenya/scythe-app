import { getPlayersSortByFirstTurn } from '../features/players/selectors';

describe('selector getPlayersSortByFirstTurn', () => {
    test('2 players', () => {
        const mockedState = {
            players: {
                '1': {
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
                '2': {
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
            }
        }

        expect(getPlayersSortByFirstTurn(mockedState).map(i => i?.faction))
            .toStrictEqual(['Крымское ханство', 'Республика Поляния']);
    });

    test('5 players', () => {

        const mockedState = {
            players: {
                Z00aaUZ5j6RXS2PElglSJ: {
                    id: 'Z00aaUZ5j6RXS2PElglSJ',
                    name: 'Player 1',
                    faction: 'Республика Поляния',
                    mat: 'Строительный (2)',
                    gold: 0,
                    popularity: 0,
                    stars: 0,
                    territories: 0,
                    resources: 0,
                    buildingBonuses: 0,
                    points: 0
                },
                '5g2tME4VxQ8izfIIdxb4e': {
                    id: '5g2tME4VxQ8izfIIdxb4e',
                    name: 'Player 2',
                    faction: 'Крымское ханство',
                    mat: 'Промышленный (1)',
                    gold: 0,
                    popularity: 0,
                    stars: 0,
                    territories: 0,
                    resources: 0,
                    buildingBonuses: 0,
                    points: 0
                },
                'n-eQ1ighsv5e_zh5tF4rP': {
                    id: 'n-eQ1ighsv5e_zh5tF4rP',
                    name: 'Player 3',
                    faction: 'Северное королевство',
                    mat: 'Патриотический (3)',
                    gold: 0,
                    popularity: 0,
                    stars: 0,
                    territories: 0,
                    resources: 0,
                    buildingBonuses: 0,
                    points: 0
                },
                '6yhh8Q-Vw0ljD1PSufDoU': {
                    id: '6yhh8Q-Vw0ljD1PSufDoU',
                    name: 'Player 4',
                    faction: 'Руссветский союз',
                    mat: 'Фермерский (5)',
                    gold: 0,
                    popularity: 0,
                    stars: 0,
                    territories: 0,
                    resources: 0,
                    buildingBonuses: 0,
                    points: 0
                },
                '8so61NZefYLTEgjRzhAR5': {
                    id: '8so61NZefYLTEgjRzhAR5',
                    name: 'Player 5',
                    faction: 'Саксонская империя',
                    mat: 'Технический (4)',
                    gold: 0,
                    popularity: 0,
                    stars: 0,
                    territories: 0,
                    resources: 0,
                    buildingBonuses: 0,
                    points: 0
                }

            }
        }

        expect(getPlayersSortByFirstTurn(mockedState).map(i => i?.faction))
            .toStrictEqual(['Крымское ханство', 'Саксонская империя', 'Республика Поляния', 'Северное королевство', 'Руссветский союз']);
    });

    test('4 players', () => {
        const mockedState = {
            players: {
                '1': {
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
                '2': {
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
                '3': {
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
                '4': {
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
                '5': {
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
            }
        }

        expect(getPlayersSortByFirstTurn(mockedState).map(i => i?.faction))
            .toStrictEqual(['Республика Поляния', 'Северное королевство', 'Руссветский союз', 'Крымское ханство', 'Саксонская империя']);
    });
});
