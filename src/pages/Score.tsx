import { Grid, IconButton, Typography } from '@material-ui/core';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { findEngNameFactionToUrl, foundPrevNextPlayers } from '../common/scytheLogic';
import { AppMenuFactions } from '../components/AppMenuFactions';
import { ScoreForm } from '../features/players/ScoreForm';
import { getPlayerByFaction, getPlayersSortByFirstTurn } from '../features/players/selectors';
import { IPlayer } from '../features/players/types';
import Main from '../layouts/Main';
import NotFound from './NotFound';

const Score: FC = () => {
    const { id } = useParams<{ id: string }>();
    const players = useSelector(getPlayersSortByFirstTurn);
    const player = useSelector(getPlayerByFaction(id));

    let { prevPlayer, nextPlayer } = foundPrevNextPlayers(players, player as IPlayer);
    const prevPlayerPath = findEngNameFactionToUrl(prevPlayer.faction);
    const nextPlayerPath = findEngNameFactionToUrl(nextPlayer.faction);

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

export default Score;
