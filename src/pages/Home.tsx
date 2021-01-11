import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import React, { FunctionComponent, useEffect } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import { foundEngNameFractionToUrl, moveToLastAddedPlayer } from '../common/scytheLogic';
import AppMenuFractions from '../components/AppMenuFractions';
import PlayerCard from '../features/players/PlayerCard';
import { addPlayer, deleteAllPlayers, editPlayer } from '../features/players/playersSlice';
import { PlayersType } from '../features/players/types';
import Main from '../layouts/Main';
import { RootState } from '../store/rootReducer';

type Props = {
    players: PlayersType;
    addPlayer: any;
    deleteAllPlayers: any;
}

const Home: FunctionComponent<Props> = (props) => {
    const { players, deleteAllPlayers, addPlayer } = props;

    // Проверка если игроки или нужно показать начальную страницу
    const { id = '' } = useParams<any>();
    let player = null;

    if (id) {
        player = Object.values(players).find(i => foundEngNameFractionToUrl(i.fraction) === id);
    }

    useEffect(() => {
        if (!id && players.length) {
            moveToLastAddedPlayer(Object.values(players));
        }
    }, []);

    // const handleCalculateScore = (): void => {
    //     for (const mat of mats) {
    //         const playerFirstTurn = players.find(player => player.mat === mat);
    //         if (playerFirstTurn) {
    //             history.push(`/score/${ foundEngNameFractionToUrl(playerFirstTurn.fraction) }`);
    //             break;
    //         }
    //     }
    // };

    const handleNewGame = () => {
        deleteAllPlayers();
    };

    return (
        <>
            <AppMenuFractions players={ Object.values(players) } />

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
                            variant="contained" color="primary" fullWidth
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
                            variant="contained" color="primary" fullWidth
                            onClick={ handleNewGame }
                        >
                            Новая игра
                        </Button>
                    </Grid>

                    <br />
                    <br />
                    <br />

                </Grid>
            </Main>
        </>
    );
};

export default connect(
    (state: RootState) => ({
        players: state.players,
    }),
    { addPlayer, editPlayer, deleteAllPlayers },
)(Home);
