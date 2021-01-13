import { AppBar, Tab, Tabs, Toolbar } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import React, { FunctionComponent } from 'react';
import { Link, useHistory, useRouteMatch } from 'react-router-dom';
import { factions, findEngNameFactionToUrl } from '../common/scytheLogic';
import { clearPath } from '../common/utils';
import { IPlayer } from '../features/players/types';
import { routes } from '../routes';
import FactionIcon from './FactionIcon';

const useStyles = makeStyles({
    toolbar: {
        padding: '3px 6px',
        fontSize: '12px',
        fontWeight: 300,
        textTransform: 'initial',
        opacity: 0.4,
        minHeight: 65,
    },
});

type Props = {
    players: IPlayer[];
};

const AppMenuFactions: FunctionComponent<Props> = (props) => {
    const { players } = props;
    const classes = useStyles();

    const history = useHistory();
    let factionUrl = useRouteMatch(routes.index.path);
    let scoreUrl = useRouteMatch(routes.score.path);
    const url = factionUrl?.path || scoreUrl?.path || '';

    const getIcon = (player: IPlayer) => <FactionIcon name={ player.faction } iconPath={ getIconPath(player) } />;
    const getIconPath = (player: IPlayer) => factions.find(i => i.name === player.faction)?.iconPath;
    const getLabel = (player: IPlayer) => factions.find(i => i.name === player.faction)?.shortName;

    return (
        <AppBar position="fixed" color="primary">
            <div className="container">
                <Toolbar>
                    { players.length
                        ? <Tabs
                            variant="scrollable"
                            scrollButtons="auto"
                            indicatorColor="secondary"
                            value={ history.location.pathname }
                        >
                            { players.map((player: IPlayer) => (
                                <Tab
                                    className={ classes.toolbar + ' faction-tab' }
                                    icon={ getIcon(player) }
                                    label={ getLabel(player) }
                                    key={ player.faction }
                                    component={ Link }
                                    value={ `${ clearPath(url) }${ findEngNameFactionToUrl(player.faction) }` }
                                    to={ `${ clearPath(url) }${ findEngNameFactionToUrl(player.faction) }` }
                                />
                            )) }
                        </Tabs>
                        : null }
                </Toolbar>
            </div>
        </AppBar>

    );
};

export default AppMenuFactions;
