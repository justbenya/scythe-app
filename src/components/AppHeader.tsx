import { Typography } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import React, { FunctionComponent } from 'react';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        toolbar: {
            justifyContent: 'space-between',
        },
        title: {
            textAlign: 'center',
        },
    }),
);

type Props = {

}

const AppHeader: FunctionComponent<Props> = (props) => {
    const classes = useStyles();

    return (
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
    );
};

export default AppHeader;


