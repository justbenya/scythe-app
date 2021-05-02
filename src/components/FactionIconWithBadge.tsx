import { Badge } from '@material-ui/core';
import green from '@material-ui/core/colors/green';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import React, { FC } from 'react';
import { factions } from '../common/scytheLogic';
import { IPlayer } from '../features/players/types';
import FactionIcon from './FactionIcon';

type FactionIconType = {
  player: IPlayer
}

export const FactionIconWithBadge: FC<FactionIconType> = ({ player }) => {
  const getIconPath = (player: IPlayer) => factions.find(i => i.name === player.faction)?.iconPath;

  return (
    <Badge
      invisible={ player.points <= 0 }
      overlap="circle"
      color="default"
      badgeContent={ <CheckCircleIcon style={ { fontSize: 16, color: green[400] } } /> }
    >
      <FactionIcon name={ player.faction } iconPath={ getIconPath(player) } />
    </Badge>
  );
};
