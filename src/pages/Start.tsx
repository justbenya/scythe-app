import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import React, { FunctionComponent } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import PlayerCard from '../features/players/PlayerCard';
import { addPlayer, deletePlayer, editPlayer } from '../features/players/playersSlice';
import { PlayersType } from '../features/players/types';
import Main from '../layouts/Main';
import { foundEngNameFractionToUrl, mats } from '../common/scytheLogic';
import { RootState } from '../store/rootReducer';

type Props = {
    addPlayer: typeof addPlayer;
    editPlayer: typeof editPlayer;
    deletePlayer: typeof deletePlayer;
    players: PlayersType
}

const Start: FunctionComponent<Props> = props => {
    const { addPlayer, editPlayer, deletePlayer, players } = props;

    const history = useHistory();


    const handleAddPlayer = () => {
        addPlayer();
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
                            <Grid key={ player.id } item>
                                <PlayerCard player={ player } players={players} deletePlayer={deletePlayer} editPlayer={editPlayer} />
                            </Grid>) }
                    </Grid>
                </Grid>
            </Grid>
        </Main>
    );
};

export default connect(
    (state: RootState) => ({
        players: state.players,
    }),
    { addPlayer, deletePlayer, editPlayer },
)(Start);

