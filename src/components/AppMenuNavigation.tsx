import { BottomNavigation, BottomNavigationAction } from '@material-ui/core';
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import ListAltIcon from '@material-ui/icons/ListAlt';
import PeopleIcon from '@material-ui/icons/People';
import SettingsIcon from '@material-ui/icons/Settings';
import React, { FunctionComponent } from 'react';
import { useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { findFactionWhoHasFirstTurn, getLastAddedFaction } from '../common/scytheLogic';
import { clearPath } from '../common/utils';
import { IPlayer } from '../features/players/types';
import { routes } from '../routes';
import { RootState } from '../store/rootReducer';

const AppMenuNavigation: FunctionComponent = () => {
    const history = useHistory();
    const players = useSelector<RootState, IPlayer[]>(state => Object.values(state.players));

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
                disabled={!players.length}
                icon={ <DonutLargeIcon /> }
                component={ Link }
                label="Очки"
                value={ history.location.pathname.includes(clearPath(routes.score.path)) ? history.location.pathname : null }
                to={ `${ clearPath(routes.score.path) }${ findFactionWhoHasFirstTurn(players) }` }
            />

            <BottomNavigationAction
                disabled={!players.length}
                icon={ <ListAltIcon /> }
                component={ Link }
                label="Результаты"
                value={ routes.result.path }
                to={ routes.result.path }
            />

            <BottomNavigationAction
                disabled
                icon={ <SettingsIcon /> }
                component={ Link }
                label="Настройки"
                value="/settings"
                to="/settings"
            />
        </BottomNavigation>
    );
};

export default AppMenuNavigation;
