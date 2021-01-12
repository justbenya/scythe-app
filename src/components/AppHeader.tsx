import { Link, Typography } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import GitHubIcon from '@material-ui/icons/GitHub';
import React, { FunctionComponent } from 'react';

const useStyles = makeStyles(() =>
    createStyles({
        bar: {
            height: 73,
            justifyContent: 'center',
        },
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
        <AppBar position="fixed" className={ classes.bar }>
            <Toolbar className={ classes.toolbar }>
                <Link rel="noopener" href="https://github.com/justbenya/scythe-app">
                    <GitHubIcon fontSize={ 'large' } style={ { color: '#fff' } } />
                </Link>

                <Typography variant="h6" className={ classes.title }>
                    { title }
                </Typography>
            </Toolbar>
        </AppBar>
    );
};

export default AppHeader;


