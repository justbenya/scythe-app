import { Button, Grid, IconButton, Typography } from '@material-ui/core';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import React, { FunctionComponent } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { findEngNameFactionToUrl, findPlayerByFaction } from '../common/scytheLogic';
import AppMenuFactions from '../components/AppMenuFactions';
import ScoreForm from '../components/ScoreForm';
import { addPlayer, editPlayer } from '../features/players/playersSlice';
import { IPlayer } from '../features/players/types';
import Main from '../layouts/Main';
import { routes } from '../routes';
import { RootState } from '../store/rootReducer';

type Props = {
    players: IPlayer[];
    match: any;
    addPlayer: any;
    editPlayer: typeof editPlayer;
}

const Score: FunctionComponent<Props> = (props) => {
    const { players, editPlayer } = props;

    const faction = props.match.params.id;
    const player = findPlayerByFaction(players, faction);

    let prevPlayer = null;
    let nextPlayer = null;
    if (Object.values(players).length > 0) {
        const sorted = Object.values(players).sort((a, b) =>
            parseInt(a.mat.slice(-2, -1)) - parseInt(b.mat.slice(-2, -1)));

        const currentIndex = sorted.findIndex(item => item.id === player.id);

        prevPlayer = currentIndex >= 0 && Object.values(sorted)[currentIndex - 1] ? findEngNameFactionToUrl(Object.values(sorted)[currentIndex - 1].faction) : null;
        nextPlayer = currentIndex >= 0 && Object.values(sorted)[currentIndex + 1] ? findEngNameFactionToUrl(Object.values(sorted)[currentIndex + 1].faction) : null;
    }

    if (!player) return <div>Loading</div>;

    return (
        <>
            <AppMenuFactions players={ players } />
            <Main title={ 'Подсчет очков' }>
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

                    <Grid item>
                        <Grid container alignItems={ 'center' } justify={ 'space-between' } spacing={ 2 }>
                            <Grid item>
                                <Button component={ Link } to={ routes.result.path } type="submit" color="secondary" variant="contained">Результаты</Button>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Main>
        </>
    );
};

export default connect(
    (state: RootState) => ({
        players: Object.values(state.players),
    }),
    { addPlayer, editPlayer },
)(Score);
