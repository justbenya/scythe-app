import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import React, { FunctionComponent } from 'react';
import AppHeader from '../components/AppHeader';

type Props = {
    title?: string;
};

const Main: FunctionComponent<Props> = (props) => {
    const { title } = props;

    return (
        <>
            <CssBaseline />

            <AppHeader title={ title } />

            <Container fixed>
                <main style={ { height: '90vh', paddingTop: 30 } }>
                    { props.children }
                </main>
            </Container>
        </>
    );
};

export default Main;
