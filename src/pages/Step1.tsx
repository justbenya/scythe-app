import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import React, { FunctionComponent, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import PlayerRow from '../components/PlayerRow';
import AppContext from '../context/AppContext';
import { IPlayer } from '../context/Types';
import { fractions, mats } from '../ScytheLogic';

const Step1: FunctionComponent = () => {
    const {
        state: players,
        createPlayer,
        fetchPlayers,
        pullFractions,
        setFractionsPull,
        pullMats,
        setMatsPull
    } = React.useContext(AppContext);

    const history = useHistory();

    useEffect(() => {
        fetchPlayers();
    }, []);

    const handleAddPlayer = (): void => {
        const randomIndex = () => Math.floor(Math.random() * pullFractions.length);

        const fractionRndIndex = randomIndex();
        const matsRndIndex = randomIndex();

        let fraction = pullFractions[fractionRndIndex];
        let mat = pullMats[matsRndIndex];

        setFractionsPull((prevFractionsPull: string[]) => prevFractionsPull.filter((_, index) => index !== fractionRndIndex));
        setMatsPull((prevMatsPull: string[]) => prevMatsPull.filter((_, index) => index !== matsRndIndex));

        createPlayer({
            fraction,
            mat,
        });
    };

    const handleCalculateScore = (): void => {
        for (const mat of mats) {
            const playerFirstTurn = Object.values(players).find(player => player.mat === mat);
            if (playerFirstTurn) {
                history.push(`/score/${ playerFirstTurn.id }`);
                break;
            }
        }
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
                                { Object.values(players).map((player) =>
                                    <PlayerRow key={ player.id } { ...player } />) }

                                <Grid item style={ { marginTop: 'auto' } }>
                                    <Button
                                        onClick={ handleCalculateScore }
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

