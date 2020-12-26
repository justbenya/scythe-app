import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import React, { FunctionComponent, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import PlayerRow from '../components/PlayerRow';
import AppContext from '../context/AppContext';
import { mats } from '../ScytheLogic';

const Step1: FunctionComponent = () => {
    const {
        state: players,
        createPlayer,
        fetchPlayers,
    } = React.useContext(AppContext);

    const history = useHistory();

    useEffect(() => {
        fetchPlayers();
    }, []);

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
                        <Button variant="contained" color="primary" fullWidth onClick={ createPlayer }>
                            Добавить игрока
                        </Button>
                    </Grid>

                    <Grid item>
                        <form>
                            <Grid container direction="column" spacing={ 4 } style={ { height: '100%' } }>
                                { Object.values(players).map((player) =>
                                    <Grid item><PlayerRow key={ player.id } { ...player } /></Grid>) }

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

