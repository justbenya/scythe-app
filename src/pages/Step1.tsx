import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { useLocalStorage, writeStorage } from '@rehooks/local-storage';
import React, { FunctionComponent, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import PlayerRow, { IPlayer } from '../components/PlayerRow';
import { fractions, mats, TOTAL_PLAYERS } from '../ScytheLogic';

function shuffle(array: any): Array<any> {
    const result = [...array];
    for (let i = result.length - 1; i > 0; i--) {
        let randIndex = Math.floor(Math.random() * (i + 1));
        let temp = result[i];
        result[i] = result[randIndex];
        result[randIndex] = temp;
    }
    return result;
}

function changeItem(players: IPlayer[], index: number, key: string, value: string): IPlayer[] {
    return players.map((item, i) => {
        if (i === index) {
            return { ...item, [key]: value };
        }
        return item;
    });
}

const Step1: FunctionComponent = () => {
    const history = useHistory();

    // todo 1
    const onSubmit = (data: any) => {
        history.push('/step2');
    };

    const [pullFractions, setFractionsPull] = useState(fractions);
    const [pullMats, setMatsPull] = useState(mats);

    const [storagePlayers] = useLocalStorage<Array<IPlayer>>('players');
    const [players, setPlayers] = useState<Array<IPlayer>>(storagePlayers || []);

    useEffect(() => {
        writeStorage('players', players);
    }, [players]);

    const handleAddPlayer = () => {
        if (players.length >= TOTAL_PLAYERS) return;

        const randomIndex = () => Math.floor(Math.random() * pullFractions.length);

        const fractionRndIndex = randomIndex();
        const matsRndIndex = randomIndex();

        let fraction = pullFractions[fractionRndIndex];
        let mat = pullMats[matsRndIndex];

        setFractionsPull((prevFractionsPull) => prevFractionsPull.filter((_, index) => index !== fractionRndIndex));
        setMatsPull((prevMatsPull) => prevMatsPull.filter((_, index) => index !== matsRndIndex));

        setPlayers([...players, {
            name: 'Player ' + (players.length + 1),
            fraction,
            mat,
        }]);
    };

    const handleChangeName = (event: React.ChangeEvent<HTMLInputElement>, index: number) => {
        const changesPlayers = changeItem(players, index, 'name', event.target.value);
        setPlayers(changesPlayers);
    };

    const handleChangeFraction = (event: React.ChangeEvent<HTMLInputElement>, index: number) => {
        const newFraction = event.target.value;
        const prevFraction = players[index].fraction;
        const otherPlayerIndex = players.findIndex(player => player.fraction === newFraction);

        const changesPlayers = players.map((item, i) => {
            if (i === index) {
                return { ...item, fraction: newFraction };
            }

            // Если мы выбрали уже задействованную фракцию, поменяем значения местами
            if (i === otherPlayerIndex ) {
                return { ...item, fraction: prevFraction };
            }

            return item;
        });

        setPlayers(changesPlayers);
    };

    const handleChangeMat = (event: React.ChangeEvent<HTMLInputElement>, index: number) => {
        const newMat = event.target.value;
        const prevMat = players[index].mat;
        const otherPlayerIndex = players.findIndex(player => player.mat === newMat);

        const changesPlayers = players.map((item, i) => {
            if (i === index) {
                return { ...item, mat: newMat };
            }

            if (i === otherPlayerIndex ) {
                return { ...item, mat: prevMat };
            }

            return item;
        });

        setPlayers(changesPlayers);
    };

    const handleDeletePlayer = (index: number) => {
        setFractionsPull((prevFractionsPull) => ([...prevFractionsPull, players[index].fraction]));
        setMatsPull((prevMatsPull) => ([...prevMatsPull, players[index].mat]));
        setPlayers((prevPlayers) => prevPlayers.filter((_, i) => i !== index));
    };

    return (
        <Container fixed>
            <main style={ { height: '90vh', paddingTop: 30 } }>
                <Grid container direction="column" spacing={ 1 }>

                    <Grid item>
                        <Button variant="contained" color="primary" fullWidth onClick={ handleAddPlayer }>
                            Добавить игрока
                        </Button>
                    </Grid>

                    <Grid item>
                        <form autoComplete="off">
                            <Grid container direction="column" spacing={ 1 } style={ { height: '100%' } }>
                                { players.map((player, index) =>
                                    <PlayerRow
                                        key={ index + player.mat + player.fraction }
                                        { ...player }
                                        index={ index }
                                        handleChangeName={ handleChangeName }
                                        handleChangeFraction={ handleChangeFraction }
                                        handleChangeMat={ handleChangeMat }
                                        handleDeletePlayer={ handleDeletePlayer }
                                    />) }

                                <Grid item style={ { marginTop: 'auto' } }>
                                    <Button
                                        onClick={ () => { history.push('/score'); } }
                                        variant="contained" color="secondary" fullWidth
                                    >Подсчет очков</Button>
                                </Grid>
                            </Grid>
                        </form>

                    </Grid>


                </Grid>

            </main>
        </Container>

    );
};

export default Step1;

