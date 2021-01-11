import { Button, Grid, IconButton, Typography } from '@material-ui/core';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import React, { FunctionComponent } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import ScoreForm from '../components/ScoreForm';
import { addPlayer, editPlayer } from '../features/players/playersSlice';
import { PlayersType } from '../features/players/types';
import Main from '../layouts/Main';
import { routes } from '../routes';
import { foundEngNameFractionToUrl, foundPlayer } from '../common/scytheLogic';
import { RootState } from '../store/rootReducer';

type Props = {
    players: PlayersType;
    match: any;
    addPlayer: any;
    editPlayer: typeof editPlayer;
}

const Score: FunctionComponent<Props> = (props) => {
    const { players, editPlayer } = props;

    const fraction = props.match.params.id;
    const player = foundPlayer(players, fraction);

    let prevPlayer = null;
    let nextPlayer = null;
    if (Object.values(players).length > 0) {
        const sorted = Object.values(players).sort((a, b) =>
            parseInt(a.mat.slice(-2, -1)) - parseInt(b.mat.slice(-2, -1)));

        const currentIndex = sorted.findIndex(item => item.id === player.id);

        prevPlayer = currentIndex >= 0 && Object.values(sorted)[currentIndex - 1] ? foundEngNameFractionToUrl(Object.values(sorted)[currentIndex - 1].fraction) : null;
        nextPlayer = currentIndex >= 0 && Object.values(sorted)[currentIndex + 1] ? foundEngNameFractionToUrl(Object.values(sorted)[currentIndex + 1].fraction) : null;
    }

    if (!player) return <div>Loading</div>;

    return (
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
    );
};

export default connect(
    (state: RootState) => ({
        players: state.players,
    }),
    { addPlayer, editPlayer },
)(Score);
