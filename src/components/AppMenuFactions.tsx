import { AppBar, Tab, Tabs, Toolbar } from '@material-ui/core';
import React, { FunctionComponent } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { factions, foundEngNameFactionToUrl } from '../common/scytheLogic';
import { IPlayer } from '../features/players/types';
import { routes } from '../routes';
import FactionIcon from './FactionIcon';

type Props = {
    players: IPlayer[];
};

const AppMenuFactions: FunctionComponent<Props> = (props) => {
    const { players } = props;

    const history = useHistory();

    const getIcon = (player: IPlayer) => <FactionIcon name={ player.faction } iconPath={ getIconPath(player) } />;
    const getIconPath = (player: IPlayer) => factions.find(i => i.name === player.faction)?.iconPath;
    const getLabel = (player: IPlayer) => factions.find(i => i.name === player.faction)?.shortName;

    return (
        <AppBar position="relative" color="primary">
            <Toolbar>
                <Tabs
                    variant="scrollable"
                    scrollButtons="auto"
                    indicatorColor="secondary"
                    value={ history.location.pathname }
                >
                    { players.map((player: IPlayer) => (
                        <Tab
                            className="faction-tab"
                            icon={ getIcon(player) }
                            label={ getLabel(player) }
                            key={ player.faction }
                            component={ Link }
                            value={ `${ routes['index'].path }${ foundEngNameFactionToUrl(player.faction) }` }
                            to={ `${ routes['index'].path }${ foundEngNameFactionToUrl(player.faction) }` }
                        />
                    )) }
                </Tabs>
            </Toolbar>
        </AppBar>
    );
};

export default AppMenuFactions;
