import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import React, { FunctionComponent } from 'react';
import AppHeader from '../components/AppHeader';

interface OwnProps {
}

type Props = OwnProps;

const Main: FunctionComponent<Props> = (props) => {

    return (
        <>
            <CssBaseline />

            <AppHeader />

            <Container fixed>
                <main style={ { height: '90vh', paddingTop: 30 } }>
                    { props.children }
                </main>
            </Container>
        </>
    );
};

export default Main;
