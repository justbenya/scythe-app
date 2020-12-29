import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import React, { FunctionComponent, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import PlayerCard from '../components/PlayerCard';
import AppContext from '../context/AppContext';
import Main from '../layouts/Main';
import { foundEngNameFractionToUrl, mats } from '../ScytheLogic';

const Start: FunctionComponent = () => {
    const {
        players,
        createPlayer,
        fetchPlayers,
    } = React.useContext(AppContext);

    const history = useHistory();

    useEffect(() => {
        fetchPlayers();
    }, []);

    const handleAddPlayer = () => {
        createPlayer();
    };

    const handleCalculateScore = (): void => {
        for (const mat of mats) {
            const playerFirstTurn = Object.values(players).find(player => player.mat === mat);
            if (playerFirstTurn) {
                history.push(`/score/${ foundEngNameFractionToUrl(playerFirstTurn.fraction) }`);
                break;
            }
        }
    };

    return (
        <Main>
            <Grid container direction="column" spacing={ 4 }>
                <Grid item>
                    <Grid container direction="column" spacing={ 1 }>
                        <Grid item>
                            <Button
                                variant="contained" color="primary" fullWidth
                                onClick={ handleAddPlayer }
                            >
                                Добавить игрока
                            </Button>
                        </Grid>

                        <Grid item>
                            <Button
                                variant="contained" color="secondary" fullWidth
                                onClick={ handleCalculateScore }
                            >
                                Подсчет очков
                            </Button>
                        </Grid>
                    </Grid>
                </Grid>

                <Grid item>
                    <Grid container direction="column" spacing={ 2 }>
                        { Object.values(players).map((player) =>
                            <Grid key={ player.id } item><PlayerCard { ...player } /></Grid>) }
                    </Grid>
                </Grid>
            </Grid>
        </Main>
    );
};

export default Start;

