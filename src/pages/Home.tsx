import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import React, { FunctionComponent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect, useParams } from 'react-router-dom';
import { FactionType, getRouteLastAddedPlayer, TOTAL_PLAYERS } from '../common/scytheLogic';
import { ButtonNewGame } from '../components/ButtonNewGame';
import { FullWidthTabs } from '../components/FullWidthTabs';
import { PlayerCard } from '../features/players/PlayerCard';
import { addPlayer } from '../features/players/playersSlice';
import { getPlayers } from '../features/players/selectors';

const Home: FunctionComponent = () => {
    const players = useSelector(getPlayers);
    const dispatch = useDispatch();

    const { id: faction } = useParams<{ id: FactionType }>();

    if (!faction && players.length) {
        return <Redirect to={ getRouteLastAddedPlayer(players) } />;
    }

    if (!players.length) {
        return <Redirect to={ '/' } />;
    }

    return (
        <FullWidthTabs players={ players } faction={ faction }>
            <PlayerCard />

            <Grid container direction="column" spacing={ 2 } justify={ 'center' } style={ { paddingTop: 20 } }>
                <Grid item>
                    <Button
                        variant="contained" disabled={ players.length >= TOTAL_PLAYERS } color="secondary" fullWidth
                        onClick={ () => dispatch(addPlayer()) }
                    >
                        Добавить игрока
                    </Button>
                </Grid>

                <Grid item>
                    <ButtonNewGame />
                </Grid>
            </Grid>
        </FullWidthTabs>
    );
};

export default Home;
