import { AppBar, Container, Tab, Tabs, Toolbar } from '@material-ui/core';
import React, { FunctionComponent } from 'react';
import { connect } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { foundEngNameFractionToUrl } from '../common/scytheLogic';
import { IPlayer } from '../features/players/types';
import { routes } from '../routes';
import { RootState } from '../store/rootReducer';

type Props = {
    players?: IPlayer;
};

const AppMenuFractions: FunctionComponent<Props> = (props) => {
    const { players } = props;

    const [value, setValue] = React.useState(0);
    const history = useHistory();

    const handleCallToRouter = (value: any) => {
        setValue(value);
    };

    console.log('history.location.pathname', history.location.pathname)

    return (
        <AppBar position="relative" color="primary">
            <Toolbar>
                <Container fixed>
                    <Tabs
                        value={ history.location.pathname }
                        onChange={ handleCallToRouter }
                    >
                        { players && Object.values(players).map((player: IPlayer) => (
                            <Tab
                                key={ player.fraction }
                                label={ player.fraction }
                                component={ Link }
                                value={ `${routes['index'].path}${ foundEngNameFractionToUrl(player.fraction) }` }
                                to={ `${routes['index'].path}${ foundEngNameFractionToUrl(player.fraction) }` }
                            />
                        )) }
                    </Tabs>
                </Container>
            </Toolbar>
        </AppBar>
    );
};

export default connect(
    (state: RootState) => ({
        players: state.players,
    }),
    null,
)(AppMenuFractions);
