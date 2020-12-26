import { Typography } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Result from './pages/Result';
import Score from './pages/Score';
import Step1 from './pages/Step1';


const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        menuButton: {
            marginRight: theme.spacing(2),
        },
        toolbar: {
            justifyContent: 'space-between',
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
                <Toolbar className={ classes.toolbar }>
                    <Typography variant="h6">
                        Scythe Point Calculator
                    </Typography>
                    <Typography variant="h6" className={ classes.title }>
                        Кто играет?
                    </Typography>
                </Toolbar>
            </AppBar>

            <Router>
                <Switch>
                    <Route exact path="/" component={ Step1 } />
                    <Route exact path="/score/:id" component={ Score } />
                    <Route exact path="/result" component={ Result } />
                </Switch>
            </Router>
        </>
    );
}

export default App;
