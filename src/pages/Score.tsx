import { Grid, Typography } from '@material-ui/core';
import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { FactionType } from '../common/scytheLogic';
import { FullWidthTabs } from '../components/FullWidthTabs';
import { ScoreForm } from '../features/players/ScoreForm';
import { getPlayerByFaction, getPlayersSortByFirstTurn } from '../features/players/selectors';
import NotFound from './NotFound';

const Score: FC = () => {
    const { id: faction } = useParams<{ id: FactionType }>();
    const players = useSelector(getPlayersSortByFirstTurn);
    const player = useSelector(getPlayerByFaction(faction));

    if (!player || !players) return <NotFound />;

    return (
        <>
            <FullWidthTabs players={ players } faction={ faction }>
                <Grid container direction={ 'column' } spacing={ 3 } style={ { height: '100%' } }>
                    <Grid item>
                        <Typography variant={ 'h5' }>Игрок: { player.name }</Typography>
                    </Grid>

                    <Grid item><ScoreForm /></Grid>
                </Grid>
            </FullWidthTabs>
        </>
    );
};

export default Score;
