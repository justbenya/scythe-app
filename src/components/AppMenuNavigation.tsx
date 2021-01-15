import { BottomNavigation, BottomNavigationAction } from '@material-ui/core';
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import ListAltIcon from '@material-ui/icons/ListAlt';
import PeopleIcon from '@material-ui/icons/People';
import SettingsIcon from '@material-ui/icons/Settings';
import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { RootState } from '../app/rootReducer';
import { findEngNameFactionToUrl, getLastAddedFaction } from '../common/scytheLogic';
import { clearPath } from '../common/utils';
import { getPlayerWhoHasFirstTurn } from '../features/players/selectors';
import { IPlayer } from '../features/players/types';
import { routes } from '../routes';

export const AppMenuNavigation: FC = () => {
    const history = useHistory();
    const players = useSelector<RootState, IPlayer[]>(state => Object.values(state.players));
    const player = useSelector(getPlayerWhoHasFirstTurn);

    return (
        <BottomNavigation className="menu-footer" value={ history.location.pathname } showLabels>
            <BottomNavigationAction
                icon={ <PeopleIcon /> }
                component={ Link }
                label="Игроки"
                value={ history.location.pathname.includes(clearPath(routes.index.path)) ? history.location.pathname : null }
                to={ `${ clearPath(routes.index.path) }${ getLastAddedFaction(players) }` }
            />

            <BottomNavigationAction
                disabled={ !players.length }
                icon={ <DonutLargeIcon /> }
                component={ Link }
                label="Очки"
                value={ history.location.pathname.includes(clearPath(routes.score.path)) ? history.location.pathname : null }
                to={ `${ clearPath(routes.score.path) }${ findEngNameFactionToUrl(player?.faction) }` }
            />

            <BottomNavigationAction
                disabled={ !players.length }
                icon={ <ListAltIcon /> }
                component={ Link }
                label="Результаты"
                value={ routes.result.path }
                to={ routes.result.path }
            />

            <BottomNavigationAction
                icon={ <SettingsIcon /> }
                component={ Link }
                label="Настройки"
                value="/settings"
                to="/settings"
            />
        </BottomNavigation>
    );
};
