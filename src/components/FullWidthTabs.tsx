import { AppBar, Paper, Tab, Tabs, Toolbar } from '@material-ui/core';
import { makeStyles, Theme, useTheme } from '@material-ui/core/styles';
import clsx from 'clsx';
import React, { FC, ReactNode, useEffect } from 'react';
import { Link, useHistory, useParams, useRouteMatch } from 'react-router-dom';
import SwipeableViews from 'react-swipeable-views';
import { factions, FactionType, findEngNameFactionToUrl, foundPlayerIndexByFaction } from '../common/scytheLogic';
import { clearPath } from '../common/utils';
import { IPlayer } from '../features/players/types';
import { routes } from '../routes';
import { AppMenuNavigation } from './AppMenuNavigation';
import { FactionIconWithBadge } from './FactionIconWithBadge';
import { TabPanel } from './TabPanel';


const useStyles = makeStyles((theme: Theme) => ({
    root: {
        backgroundColor: theme.palette.background.paper,
        width: '100%',
    },
    paper: {
        backgroundColor: theme.palette.background.default,
        width: '100%',
        height: '100%',
        paddingTop: 80,
        paddingBottom: 80,
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
    swipeableViews: { height: '100%' },
}));


type Props = {
    players: IPlayer[],
    children: ReactNode
    faction?: FactionType
}

export const FullWidthTabs: FC<Props> = ({ children, players }) => {
    const classes = useStyles();
    const theme = useTheme();
    const { id: faction } = useParams<{ id: FactionType }>();

    const [value, setValue] = React.useState(foundPlayerIndexByFaction(players, faction));

    const history = useHistory();
    let factionUrl = useRouteMatch(routes.index.path);
    let scoreUrl = useRouteMatch(routes.score.path);
    const url = factionUrl?.path || scoreUrl?.path || '';

    const handleChange = (event: React.ChangeEvent<{}>, value: number) => {
        setValue(value);
    };

    const handleChangeIndex = (index: number) => {
        if (index < players.length) {
            setValue(index);
            history.push(`${ clearPath(url) }${ findEngNameFactionToUrl(players[index].faction) }`);
        }
    };

    useEffect(() => {
        setValue(foundPlayerIndexByFaction(players, faction));
    }, [faction]);

    const getLabel = (player: IPlayer) => factions.find(i => i.name === player.faction)?.shortName;

    return (
        <Paper className={ classes.paper }>
            <AppBar className={ classes.root } position="fixed">
                <div className="container">
                    <Toolbar>
                        <Tabs
                            value={ value }
                            onChange={ handleChange }
                            scrollButtons="auto"
                            variant="scrollable"
                            indicatorColor="secondary"
                        >
                            { players.map((player: IPlayer) => (
                                <Tab
                                    key={ player.faction }
                                    component={ Link }
                                    className={ clsx(classes.tab, 'faction-tab') }
                                    label={ getLabel(player) }
                                    icon={ <FactionIconWithBadge player={ player } /> }
                                    to={ `${ clearPath(url) }${ findEngNameFactionToUrl(player.faction) }` }
                                />
                            )) }
                        </Tabs>
                    </Toolbar>
                </div>
            </AppBar>

            <SwipeableViews
                threshold={2}
                hysteresis={0.1}
                resistance
                className={ classes.swipeableViews }
                axis={ theme.direction === 'rtl' ? 'x-reverse' : 'x' }
                index={ value }
                onChangeIndex={ handleChangeIndex }
            >
                { players.map((player, index) => (
                    <TabPanel key={ player.faction } value={ value } index={ index } dir={ theme.direction }>
                        { children }
                    </TabPanel>
                )) }
            </SwipeableViews>

            <AppMenuNavigation />
        </Paper>
    );
};
