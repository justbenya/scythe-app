import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';
import React, { FunctionComponent } from 'react';
import AppMenuNavigation from '../components/AppMenuNavigation';

const useStyles = makeStyles({
    fixed: {
        '@media (min-width: 600px)': {
            maxWidth: 768,
        },
        '@media (min-width: 960px)': {
            maxWidth: 960,
        },
        '@media (min-width: 1280px)': {
            maxWidth: 1280,
        },
    },
    main: {
        height: '100%',
        paddingTop: 80,
        paddingBottom: 25,
    },
});

const Main: FunctionComponent = (props) => {
    const classes = useStyles();

    return (
        <>
            <CssBaseline />

            <Container fixed className={ classes.fixed }>
                <main className={ classes.main }>{ props.children }</main>
            </Container>

            <AppMenuNavigation />
        </>
    );
};

export default Main;
