import { IconButton, Typography } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import React, { FunctionComponent } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { routes } from '../routes';

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
    const history = useHistory();

    return (
        <AppBar position="static">
            <Toolbar className={ classes.toolbar }>
                { history.location.pathname !== routes.index.path &&
                <IconButton
                    component={ Link }
                    to={ routes.index.path }
                    edge="start"
                    color="inherit"
                    aria-label="back"
                >
                    <ArrowBackIosIcon />
                </IconButton>
                }

                <Typography variant="h6" className={ classes.title }>
                    { title }
                </Typography>
            </Toolbar>
        </AppBar>
    );
};

export default AppHeader;


