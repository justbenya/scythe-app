import { AppBar, Container, Tab, Tabs, Toolbar } from '@material-ui/core';
import React, { FunctionComponent } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { foundEngNameFractionToUrl } from '../common/scytheLogic';
import { IPlayer } from '../features/players/types';
import { routes } from '../routes';

type Props = {
    players: IPlayer[];
};

const AppMenuFractions: FunctionComponent<Props> = (props) => {
    const { players } = props;

    const history = useHistory();

    return (
        <AppBar position="relative" color="primary">
            <Toolbar>
                <Container fixed>
                    <Tabs
                        value={ history.location.pathname }
                        TabIndicatorProps={ {
                            style: {
                                display: 'none',
                            },
                        } }
                    >
                        { players.map((player: IPlayer) => (
                            <Tab
                                key={ player.fraction }
                                label={ player.fraction }
                                component={ Link }
                                value={ `/fraction/${ foundEngNameFractionToUrl(player.fraction) }` }
                                to={ `/fraction/${ foundEngNameFractionToUrl(player.fraction) }` }
                            />
                        )) }
                    </Tabs>
                </Container>
            </Toolbar>
        </AppBar>
    );
};

export default AppMenuFractions;
