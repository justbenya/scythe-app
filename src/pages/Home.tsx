import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import React, { FunctionComponent, useEffect } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import { foundEngNameFactionToUrl, moveToLastAddedPlayer, TOTAL_PLAYERS } from '../common/scytheLogic';
import AppMenuFactions from '../components/AppMenuFactions';
import PlayerCard from '../features/players/PlayerCard';
import { addPlayer, deleteAllPlayers, editPlayer } from '../features/players/playersSlice';
import { IPlayer } from '../features/players/types';
import Main from '../layouts/Main';
import { RootState } from '../store/rootReducer';

type Props = {
    players: IPlayer[];
    addPlayer: any;
    deleteAllPlayers: any;
}

const Home: FunctionComponent<Props> = (props) => {
    const { players, deleteAllPlayers, addPlayer } = props;

    // Проверка есть ли игроки или нужно показать начальную страницу
    const { id = '' } = useParams<any>();
    let player = null;

    if (id) {
        player = players.find(i => foundEngNameFactionToUrl(i.faction) === id);
    }

    useEffect(() => {
        if (!id && players.length) {
            moveToLastAddedPlayer(players);
        }
    }, []);

    const handleNewGame = () => {
        deleteAllPlayers();
    };

    if (!id && players.length) {
        return null;
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
                            variant="contained" disabled color="primary" fullWidth
                            onClick={ () => console.log('2') }
                        >
                            Перевыбрать игрока
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
};

export default connect(
    (state: RootState) => ({
        players: Object.values(state.players),
    }),
    { addPlayer, editPlayer, deleteAllPlayers },
)(Home);
