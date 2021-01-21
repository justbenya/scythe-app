import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import React, { FunctionComponent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect, useParams } from 'react-router-dom';
import { FactionType, findPlayerByFaction, getRouteLastAddedPlayer, TOTAL_PLAYERS } from '../common/scytheLogic';
import { FullWidthTabs } from '../components/FullWidthTabs';
import { PlayerCard } from '../features/players/PlayerCard';
import { addPlayer, deleteAllPlayers } from '../features/players/playersSlice';
import { getPlayers } from '../features/players/selectors';

const Home: FunctionComponent = () => {
    const players = useSelector(getPlayers);
    const dispatch = useDispatch();

    // Проверка есть ли игроки или нужно показать начальную страницу
    const { id: faction } = useParams<{ id: FactionType }>();
    const player = findPlayerByFaction(players, faction);

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
                    <Button
                        variant="contained" disabled={ !player } color="primary" fullWidth
                        onClick={ () => dispatch(deleteAllPlayers()) }
                    >
                        Новая игра
                    </Button>
                </Grid>
            </Grid>
        </FullWidthTabs>
    );
};

export default Home;
