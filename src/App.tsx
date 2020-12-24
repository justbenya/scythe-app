import { Typography } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import IconButton from '@material-ui/core/IconButton';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import MenuIcon from '@material-ui/icons/Menu';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Score from './pages/Score';
import Step1 from './pages/Step1';


const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        menuButton: {
            marginRight: theme.spacing(2),
        },
        title: {
            textAlign: 'center',
        },
    }),
);

function App() {

    const classes = useStyles();

    return (
        <>
            <CssBaseline />

            <AppBar position="static">
                <Toolbar>
                    <IconButton edge="start" className={ classes.menuButton } color="inherit" aria-label="menu">
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" className={ classes.title }>
                        Кто играет?
                    </Typography>
                </Toolbar>
            </AppBar>

            <Router>
                <Switch>
                    <Route exact path="/" component={ Step1 } />
                    <Route exact path="/score" component={ Score } />
                    <Route exact path="/result" component={ Step1 } />
                </Switch>
            </Router>
        </>
    );
}

export default App;
