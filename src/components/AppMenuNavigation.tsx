import { AppBar, Container, Tab, Tabs, Toolbar } from '@material-ui/core';
import React, { FunctionComponent } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { routes } from '../routes';

const AppMenuNavigation: FunctionComponent = () => {
    const history = useHistory();
    return (
        <AppBar className="menu-footer" position="fixed" color="primary">
            <Toolbar>
                <Container fixed>
                    <Tabs value={ history.location.pathname }>
                        { Object.values(routes).map(route => (
                            <Tab
                                key={ route.path }
                                component={ Link }
                                label={ route.title }
                                value={ route.path }
                                to={ route.path }
                            />
                        )) }
                    </Tabs>
                </Container>
            </Toolbar>
        </AppBar>
    );
};

export default AppMenuNavigation;
