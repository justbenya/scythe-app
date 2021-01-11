import { AppBar, Tab, Tabs, Toolbar } from '@material-ui/core';
import React, { FunctionComponent } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { foundEngNameFractionToUrl, fractions } from '../common/scytheLogic';
import { IPlayer } from '../features/players/types';
import FactionIcon from './FactionIcon';

type Props = {
    players: IPlayer[];
};

const AppMenuFactions: FunctionComponent<Props> = (props) => {
    const { players } = props;

    const history = useHistory();

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
                            icon={ <FactionIcon
                                name={ player.fraction }
                                iconPath={ fractions.find(i => i.name === player.fraction)?.iconPath }
                            /> }
                            key={ player.fraction }
                            label={ fractions.find(i => i.name === player.fraction)?.shortName }
                            component={ Link }
                            value={ `/fraction/${ foundEngNameFractionToUrl(player.fraction) }` }
                            to={ `/fraction/${ foundEngNameFractionToUrl(player.fraction) }` }
                        />
                    )) }
                </Tabs>

            </Toolbar>
        </AppBar>
    );
};

export default AppMenuFactions;
