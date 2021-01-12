import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import React, { FunctionComponent } from 'react';
import { connect } from 'react-redux';
import { Redirect, useHistory, useParams } from 'react-router-dom';
import { findPlayerByFaction, getRouteLastAddedPlayer, TOTAL_PLAYERS } from '../common/scytheLogic';
import AppHeader from '../components/AppHeader';
import AppMenuFactions from '../components/AppMenuFactions';
import PlayerCard from '../features/players/PlayerCard';
import { addPlayer, deleteAllPlayers, deletePlayer, editPlayer } from '../features/players/playersSlice';
import { IPlayer } from '../features/players/types';
import Main from '../layouts/Main';
import { RootState } from '../store/rootReducer';

type Props = {
    players: IPlayer[];
    addPlayer: any;
    deleteAllPlayers: any;
    deletePlayer: typeof deletePlayer;
}

const Home: FunctionComponent<Props> = (props) => {
    const { players, deleteAllPlayers, deletePlayer, addPlayer } = props;

    const history = useHistory();

    // Проверка есть ли игроки или нужно показать начальную страницу
    const { id = '' } = useParams<any>();
    const player = findPlayerByFaction(players, id);

    if (!id && players.length) {
        return <Redirect to={ getRouteLastAddedPlayer(players) } />;
    }

    return (
        <>
            { players.length
                ? <AppMenuFactions players={ players } />
                : <AppHeader /> }

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
                            onClick={ handleDeletePlayer }
                        >
                            Удалить игрока
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

    function handleDeletePlayer() {
        deletePlayer(player.id);
        history.push('/');
    }

    function handleNewGame() {
        deleteAllPlayers();
    }
};

export default connect(
    (state: RootState) => ({
        players: Object.values(state.players),
    }),
    { addPlayer, editPlayer, deletePlayer, deleteAllPlayers },
)(Home);
