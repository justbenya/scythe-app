import { Grid, Typography } from '@material-ui/core';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { FactionType, foundPrevNextPlayers } from '../common/scytheLogic';
import { FullWidthTabs } from '../components/FullWidthTabs';
import { scoreFormSubmit } from '../features/players/playersSlice';
import { ScoreForm } from '../features/players/ScoreForm';
import { getPlayerByFaction, getPlayersSortByFirstTurn } from '../features/players/selectors';
import { IPlayer, IPoints } from '../features/players/types';
import NotFound from './NotFound';

const Score = () => {
  const { id: faction } = useParams<{ id: FactionType }>();
  const players = useSelector(getPlayersSortByFirstTurn);
  const player = useSelector(getPlayerByFaction(faction));
  const dispatch = useDispatch();

  const { nextPlayer } = foundPrevNextPlayers(players, player as IPlayer);

  if (!player || !players) return <NotFound />;

  const handleOnSubmit = (formData: IPoints) => {
    return dispatch(scoreFormSubmit(player, formData, nextPlayer));
  };

  return (
    <>
      <FullWidthTabs players={ players } faction={ faction }>
        <Grid container direction={ 'column' } spacing={ 3 } style={ { height: '100%' } }>
          <Grid item>
            <Typography variant={ 'h5' }>Игрок: { player.name }</Typography>
          </Grid>

          <Grid item>
            <ScoreForm
              player={ player }
              saveData={ handleOnSubmit }
            />
          </Grid>
        </Grid>
      </FullWidthTabs>
    </>
  );
};

export default Score;
