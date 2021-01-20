import { Button, Container, Grid, Paper, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import React, { FC } from 'react';
import { useDispatch } from 'react-redux';
import { addPlayer } from '../features/players/playersSlice';
import Image from '../img/bg.jpg';

const useStyles = makeStyles({
    container: {
        height: '100vh',
    },
    paperContainer: {
        backgroundColor: '#acacac',
        backgroundImage: `url(${ Image })`,
        height: '100vh',
        backgroundPosition: 'top center',
        backgroundSize: 'cover',
    },
    logo: {
        marginTop: 20,
        width: 120,
        height: 120,
    },
    title: {
        paddingTop: 50,
        fontWeight: 'bold',
        color: '#fff',
        fontSize: 46,
        textShadow: '0 4px 3px rgba(0, 0, 0, 0.4), 0 8px 14px rgba(0, 0, 0, 0.1), 0 18px 30px rgba(0, 0, 0, 0.1)',
    },
    btnAddPlayer: {
        marginTop: 'auto',
        marginBottom: '15vh',
    },
});

const First: FC = () => {
    const dispatch = useDispatch();
    const classes = useStyles();

    return (
        <>
            <Paper className={ classes.paperContainer } elevation={ 0 }>
                <Container fixed>

                    <Grid
                        className={ classes.container }
                        container
                        direction="column"
                        justify={ 'center' }
                        alignItems={ 'center' }
                    >
                        <Grid item>
                            {/*<img className={ classes.logo } src={ Logo } alt="logo" />*/ }
                        </Grid>

                        <Grid item>
                            <Typography align={ 'center' } className={ classes.title }>
                                Scythe Score Calculator
                            </Typography>
                        </Grid>

                        <Grid className={ classes.btnAddPlayer } item>
                            <Button
                                variant="contained" color="secondary" fullWidth
                                onClick={ () => dispatch(addPlayer()) }
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

export default First;
