import { Grid, IconButton, Typography } from '@material-ui/core';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import React, { FunctionComponent } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { findEngNameFactionToUrl, findPlayerByFaction, findTurnOrder } from '../common/scytheLogic';
import AppMenuFactions from '../components/AppMenuFactions';
import ScoreForm from '../components/ScoreForm';
import { addPlayer, editPlayer } from '../features/players/playersSlice';
import { IPlayer } from '../features/players/types';
import Main from '../layouts/Main';
import { RootState } from '../store/rootReducer';
import NotFound from './NotFound';

type Props = {
    players: IPlayer[];
    player: IPlayer;
    match: any;
    addPlayer: any;
    editPlayer: typeof editPlayer;
}

const Score: FunctionComponent<Props> = (props) => {
    const { players, player, editPlayer } = props;

    let prevPlayer = null;
    let nextPlayer = null;
    if (players.length > 0 && player?.id) {
        const currentIndex = players.findIndex(item => item.id === player.id);
        prevPlayer = currentIndex >= 0 && players[currentIndex - 1] ? findEngNameFactionToUrl(players[currentIndex - 1].faction) : null;
        nextPlayer = currentIndex >= 0 && players[currentIndex + 1] ? findEngNameFactionToUrl(players[currentIndex + 1].faction) : null;
    }

    if (!player || !players) return <NotFound/>;

    return (
        <>
            <AppMenuFactions players={ players } />
            <Main>
                <Grid container direction={ 'column' } spacing={ 2 }>
                    <Grid item>
                        <Grid container alignItems={ 'center' }>
                            <Grid item xs={ 8 } sm={ 10 }>
                                <Typography variant={ 'h5' }>Игрок: { player.name }</Typography>
                            </Grid>

                            <Grid item xs={ 2 } sm={ 1 } style={ { textAlign: 'end' } }>
                                <IconButton
                                    disabled={ !Boolean(prevPlayer) }
                                    component={ Link }
                                    to={ `/score/${ prevPlayer }` }
                                    color="inherit"
                                >
                                    <ChevronLeftIcon />
                                </IconButton>
                            </Grid>

                            <Grid item xs={ 2 } sm={ 1 } style={ { textAlign: 'end' } }>
                                <IconButton
                                    edge="end"
                                    disabled={ !Boolean(nextPlayer) }
                                    component={ Link }
                                    to={ `/score/${ nextPlayer }` }
                                    color="inherit"
                                >
                                    <ChevronRightIcon />
                                </IconButton>
                            </Grid>
                        </Grid>
                    </Grid>

                    <Grid item>
                        <ScoreForm player={ player } editPlayer={ editPlayer } />
                    </Grid>
                </Grid>
            </Main>
        </>
    );
};

export default connect(
    (state: RootState, ownProps: Props) => ({
        players: findTurnOrder(Object.values(state.players)),
        player: findPlayerByFaction(Object.values(state.players), ownProps.match.params.id),
    }),
    { addPlayer, editPlayer },
)(Score);
