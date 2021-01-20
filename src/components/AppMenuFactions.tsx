import { AppBar, Tab, Tabs, Toolbar } from '@material-ui/core';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import React, { FC } from 'react';
import { Link, useHistory, useRouteMatch } from 'react-router-dom';
import { factions, findEngNameFactionToUrl } from '../common/scytheLogic';
import { clearPath } from '../common/utils';
import { IPlayer } from '../features/players/types';
import { routes } from '../routes';
import { FactionIconWithBadge } from './FactionIconWithBadge';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            backgroundColor: theme.palette.background.default,
        },
        tab: {
            padding: '3px 6px',
            fontSize: '12px',
            fontWeight: 300,
            textTransform: 'initial',
            opacity: 0.4,
            minHeight: 65,
            color: theme.palette.text.primary,
        },
    }),
);

type Props = {
    players: IPlayer[];
};

export const AppMenuFactions: FC<Props> = (props) => {
    const { players } = props;
    const classes = useStyles();

    const history = useHistory();
    let factionUrl = useRouteMatch(routes.index.path);
    let scoreUrl = useRouteMatch(routes.score.path);
    const url = factionUrl?.path || scoreUrl?.path || '';

    const getLabel = (player: IPlayer) => factions.find(i => i.name === player.faction)?.shortName;

    return (
        <AppBar className={ classes.root } position="fixed">
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
                                    className={ classes.tab + ' faction-tab' }
                                    icon={ <FactionIconWithBadge player={ player } /> }
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
