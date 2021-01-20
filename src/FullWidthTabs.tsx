import { Paper, Toolbar } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import { makeStyles, Theme, useTheme } from '@material-ui/core/styles';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import clsx from 'clsx';
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link, useHistory, useParams, useRouteMatch } from 'react-router-dom';
import SwipeableViews from 'react-swipeable-views';
import { factions, findEngNameFactionToUrl } from './common/scytheLogic';
import { clearPath } from './common/utils';
import { FactionIconWithBadge } from './components/FactionIconWithBadge';
import { TabPanel } from './components/TabPanel';
import PlayerCard from './features/players/PlayerCard';
import { getPlayers } from './features/players/selectors';
import { IPlayer } from './features/players/types';
import { routes } from './routes';


const useStyles = makeStyles((theme: Theme) => ({
    root: {
        backgroundColor: theme.palette.background.paper,
        width: '100%',
    },
    paper: {
        height: '100vh',
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
}));

//todo перенести в scytheLogic
type FactionType = 'polania' | 'saxony' | 'crimean' | 'nordic' | 'rusviet'

const foundPlayerIndexByFaction = (players: IPlayer[], searchFaction: FactionType) => {
    const factions = players.map(player => findEngNameFactionToUrl(player.faction));
    const index = factions.findIndex(faction => faction === searchFaction);
    return index <= 0 ? 0 : index;
};

export default function FullWidthTabs() {
    const { id: faction } = useParams<{ id: FactionType }>();
    const players = useSelector(getPlayers);

    const classes = useStyles();
    const theme = useTheme();
    const [value, setValue] = React.useState(foundPlayerIndexByFaction(players, faction));

    useEffect(() => {
        setValue(foundPlayerIndexByFaction(players, faction));
    }, [faction, players]);

    const history = useHistory();
    let factionUrl = useRouteMatch(routes.index.path);
    let scoreUrl = useRouteMatch(routes.score.path);
    const url = factionUrl?.path || scoreUrl?.path || '';

    const getLabel = (player: IPlayer) => factions.find(i => i.name === player.faction)?.shortName;

    const handleChange = (event: React.ChangeEvent<{}>, newFaction: FactionType) => {
        const index = foundPlayerIndexByFaction(players, newFaction);
        setValue(index <= 0 ? 0 : index);
    };

    const handleChangeIndex = (index: number) => {
        if (value !== index) {
            setValue(index);
            history.push(`${ clearPath(url) }${ findEngNameFactionToUrl(players[index].faction) }`);
        }
    };

    return (
        <Paper className={ classes.paper }>
            <AppBar className={ classes.root } position="static">
                <div className="container">
                    <Toolbar>
                        <Tabs
                            value={ faction }
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
                                    value={ `${ findEngNameFactionToUrl(player.faction) }` }
                                    to={ `${ clearPath(url) }${ findEngNameFactionToUrl(player.faction) }` }
                                />
                            )) }
                        </Tabs>
                    </Toolbar>
                </div>
            </AppBar>

            <SwipeableViews
                axis={ theme.direction === 'rtl' ? 'x-reverse' : 'x' }
                index={ value }
                onChangeIndex={ handleChangeIndex }
            >
                { players.map((player, index) => (
                    <TabPanel key={ player.faction } value={ value } index={ index } dir={ theme.direction }>
                        <PlayerCard />
                    </TabPanel>
                )) }
            </SwipeableViews>
        </Paper>
    );
}
