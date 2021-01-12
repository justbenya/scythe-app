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
            marginLeft: 'auto',
        },
    }),
);

type Props = {
    title?: string;
}

const AppHeader: FunctionComponent<Props> = (props) => {
    const { title = 'Scythe Point Calculator' } = props;
    const classes = useStyles();

    return (
        <AppBar position="static">
            <Toolbar className={ classes.toolbar }>
                <Typography variant="h6" className={ classes.title }>
                    { title }
                </Typography>
            </Toolbar>
        </AppBar>
    );
};

export default AppHeader;


