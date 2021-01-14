import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import React, { FunctionComponent } from 'react';
import { connect } from 'react-redux';
import { Redirect, useParams } from 'react-router-dom';
import { RootState } from '../app/rootReducer';
import { findPlayerByFaction, getRouteLastAddedPlayer, TOTAL_PLAYERS } from '../common/scytheLogic';
import { AppMenuFactions } from '../components/AppMenuFactions';
import PlayerCard from '../features/players/PlayerCard';
import { addPlayer, deleteAllPlayers, editPlayer } from '../features/players/playersSlice';
import { IPlayer } from '../features/players/types';
import Main from '../layouts/Main';

type Props = {
    players: IPlayer[];
    addPlayer: any;
    deleteAllPlayers: any;
}

const Home: FunctionComponent<Props> = (props) => {
    const { players, deleteAllPlayers, addPlayer } = props;

    // Проверка есть ли игроки или нужно показать начальную страницу
    const { id = '' } = useParams<any>();
    const player = findPlayerByFaction(players, id);

    if (!id && players.length) {
        return <Redirect to={ getRouteLastAddedPlayer(players) } />;
    }

    if (!players.length) {
        return <Redirect to={ '/' } />;
    }

    return (
        <>
            <AppMenuFactions players={ players } />

            <Main>
                <Grid container direction="column" spacing={ 2 } justify={ 'center' }>
                    {
                        player &&
                        <Grid item>
                            <PlayerCard />
                        </Grid>
                    }

                    <Grid item>
                        <Button
                            variant="contained" disabled={ players.length >= TOTAL_PLAYERS } color="secondary" fullWidth
                            onClick={ addPlayer }
                        >
                            Добавить игрока
                        </Button>
                    </Grid>

                    <Grid item>
                        <Button
                            variant="contained" disabled={ !player } color="primary" fullWidth
                            onClick={ handleNewGame }
                        >
                            Новая игра
                        </Button>
                    </Grid>

                    <Grid item> <br /> </Grid>
                </Grid>
            </Main>
        </>
    );

    function handleNewGame() {
        deleteAllPlayers();
    }
};

export default connect(
    (state: RootState) => ({
        players: Object.values(state.players),
    }),
    { addPlayer, editPlayer, deleteAllPlayers },
)(Home);
