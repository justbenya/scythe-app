import { Grid, IconButton, Typography } from '@material-ui/core';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import React, { FunctionComponent } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { RootState } from '../app/rootReducer';
import { findEngNameFactionToUrl, foundPrevNextPlayers } from '../common/scytheLogic';
import { AppMenuFactions } from '../components/AppMenuFactions';
import { addPlayer, editPlayer } from '../features/players/playersSlice';
import { ScoreForm } from '../features/players/ScoreForm';
import { getPlayerByFaction, getPlayersSortByFirstTurn } from '../features/players/selectors';
import { IPlayer } from '../features/players/types';
import Main from '../layouts/Main';
import NotFound from './NotFound';

type Props = {
    players: IPlayer[];
    player: IPlayer;
    match: any;
}

const Score: FunctionComponent<Props> = (props) => {
    const { players, player } = props;

    let { prevPlayer, nextPlayer } = foundPrevNextPlayers(players, player)
    const prevPlayerPath = findEngNameFactionToUrl(prevPlayer.faction)
    const nextPlayerPath = findEngNameFactionToUrl(nextPlayer.faction)

    if (!player || !players) return <NotFound />;

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
                                    disabled={ !Boolean(prevPlayerPath) }
                                    component={ Link }
                                    to={ `/score/${ prevPlayerPath }` }
                                    color="inherit"
                                >
                                    <ChevronLeftIcon />
                                </IconButton>
                            </Grid>

                            <Grid item xs={ 2 } sm={ 1 } style={ { textAlign: 'end' } }>
                                <IconButton
                                    edge="end"
                                    disabled={ !Boolean(nextPlayerPath) }
                                    component={ Link }
                                    to={ `/score/${ nextPlayerPath }` }
                                    color="inherit"
                                >
                                    <ChevronRightIcon />
                                </IconButton>
                            </Grid>
                        </Grid>
                    </Grid>

                    <Grid item>
                        <ScoreForm />
                    </Grid>
                </Grid>
            </Main>
        </>
    );
};

export default connect(
    (state: RootState, ownProps: Props) => ({
        players: getPlayersSortByFirstTurn(state),
        player: getPlayerByFaction(ownProps.match.params.id) as any,
    }),
    { addPlayer, editPlayer },
)(Score);
