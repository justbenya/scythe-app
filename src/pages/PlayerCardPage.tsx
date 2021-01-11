import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import React, { FunctionComponent, useEffect } from 'react';
import { connect } from 'react-redux';
import { useHistory, useRouteMatch } from 'react-router-dom';
import PlayerCard from '../features/players/PlayerCard';
import PlayerList from '../features/players/PlayerList';
import { addPlayer, deletePlayer, editPlayer } from '../features/players/playersSlice';
import { PlayersType } from '../features/players/types';
import Main from '../layouts/Main';
import { foundEngNameFractionToUrl, foundPlayer, mats } from '../common/scytheLogic';
import { routes } from '../routes';
import { RootState } from '../store/rootReducer';

type Props = {
    players: PlayersType;
    addPlayer: any;
    editPlayer: typeof editPlayer;
    deletePlayer: typeof deletePlayer;
    match: any;
}

const PlayerCardPage: FunctionComponent<Props> = props => {
    const { players, addPlayer, editPlayer, deletePlayer } = props;

    const history = useHistory();
    let { path, url } = useRouteMatch();
    // useEffect(() => {
    //     addPlayer()
    // }, [])

    // if (!Object.values(players).length) return null;

    const fraction = props.match.params.id;

    if (!fraction) {
        // history.push(routes.index.path)
    }

    const player = foundPlayer(players, fraction);

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
                <br/>
                <br/>
                <br/>
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
                    {/*<PlayerCard player={ player } players={players} deletePlayer={deletePlayer} editPlayer={editPlayer} />*/}

                    {/*<Grid container direction="column" spacing={ 2 }>*/}
                    {/*    { Object.values(players).map((player) =>*/}
                    {/*        <Grid key={ player.id } item>*/}
                    {/*            <PlayerCard player={ player } players={players} deletePlayer={deletePlayer} editPlayer={editPlayer} />*/}
                    {/*        </Grid>) }*/}
                    {/*</Grid>*/}
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
)(PlayerCardPage);

