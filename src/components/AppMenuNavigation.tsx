import { BottomNavigation, BottomNavigationAction } from '@material-ui/core';
import React, { FunctionComponent } from 'react';
import { useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { getLastAddedFraction } from '../common/scytheLogic';
import { IPlayer } from '../features/players/types';
import { RootState } from '../store/rootReducer';

const AppMenuNavigation: FunctionComponent = () => {
    const history = useHistory();
    const players = useSelector<RootState, IPlayer[]>(state => Object.values(state.players));

    return (
        <BottomNavigation className="menu-footer" value={ history.location.pathname } showLabels>
            <BottomNavigationAction
                component={ Link }
                label="Фракции"
                value={ `/fraction/${ getLastAddedFraction(players) }` }
                to={ `/fraction/${ getLastAddedFraction(players) }` }
            />

            <BottomNavigationAction
                component={ Link }
                label="Подсчет очков"
                value="/score"
                to="/score"
            />

            <BottomNavigationAction
                component={ Link }
                label="Карта"
                value="/map"
                to="/map"
            />

            <BottomNavigationAction
                component={ Link }
                label="Настройки"
                value="/settings"
                to="/settings"
            />
        </BottomNavigation>
    );
};

export default AppMenuNavigation;
