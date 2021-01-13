import { Paper, Typography } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import React, { FunctionComponent } from 'react';
import { connect } from 'react-redux';
import { addPlayer } from '../features/players/playersSlice';
import Image from '../img/bg.jpg';
import Logo from '../img/logo.png';

const styles = {
    paperContainer: {
        backgroundImage: `url(${ Image })`,
        height: '100vh',
        backgroundPosition: 'top center',
        backgroundSize: 'cover',
    },
};

type Props = {
    addPlayer: any;
}

const First: FunctionComponent<Props> = (props) => {
    const { addPlayer } = props;

    return (
        <>
            <CssBaseline />

            <Paper style={ styles.paperContainer } elevation={ 0 }>
                <Container fixed>

                    <Grid container style={ { height: '100vh' } } direction="column" spacing={ 0 } justify={ 'center' } alignItems={ 'center' }>
                        <Grid item style={ { marginTop: 20 } }>
                            <img src={ Logo } alt="logo" width={ 120 } height={ 120 } />
                        </Grid>

                        <Grid item>
                            <Typography align={ 'center' } style={ { fontWeight: 'bold', fontSize: 21 } }>
                                Scythe Score Calculator
                            </Typography>
                        </Grid>

                        <Grid item style={ { marginTop: 'auto', marginBottom: 50 } }>
                            <Button
                                variant="contained" color="secondary" fullWidth
                                onClick={ addPlayer }
                            >
                                Добавить игрока
                            </Button>
                        </Grid>
                    </Grid>

                </Container>
            </Paper>
        </>
    );
};

export default connect(
    null,
    { addPlayer },
)(First);
