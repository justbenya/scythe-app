import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';
import React, { FunctionComponent } from 'react';
import AppHeader from '../components/AppHeader';
import AppMenuNavigation from '../components/AppMenuNavigation';
import AppMenuFactions from '../components/AppMenuFactions';
import ToastMessage from '../components/ToastMessage';

const useStyles = makeStyles({
    fixed: {
        '@media (min-width: 600px)': {
            maxWidth: 768,
        },
        '@media (min-width: 960px)': {
            maxWidth: 960
        },
        '@media (min-width: 1280px)': {
            maxWidth: 1280
        }
    },
});

type Props = {
    title?: string;
};

const Main: FunctionComponent<Props> = (props) => {
    const { title } = props;
    const classes = useStyles();

    return (
        <>
            <CssBaseline />

            {/*<AppHeader title={ title } />*/}

            {/*<AppMenuFractions/>*/}

            <ToastMessage />

            <Container fixed  className={ classes.fixed }>
                <main style={ { height: '100%', paddingTop: 30} }>
                    { props.children }
                </main>
            </Container>

            <AppMenuNavigation/>
        </>
    );
};

export default Main;
