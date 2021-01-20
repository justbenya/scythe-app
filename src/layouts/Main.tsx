import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import React, { FC } from 'react';
import { AppMenuNavigation } from '../components/AppMenuNavigation';

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
        paddingBottom: 80,
    },
});

type Props = {
    [name: string]: any;
}

const Main: FC<Props> = (props) => {
    const { className } = props;
    const classes = useStyles();

    return (
        <>
            <Container fixed className={ classes.fixed }>
                <main className={ clsx(classes.main, className) }>{ props.children }</main>
            </Container>

            <AppMenuNavigation />
        </>
    );
};

export default Main;
