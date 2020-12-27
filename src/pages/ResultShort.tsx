import { Card, CardContent, CardMedia, Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import React, { FunctionComponent, useEffect } from 'react';
import { ReactComponent as Wreath } from '../assets/icons/wreath.svg';
import AppContext from '../context/AppContext';
import Main from '../layouts/Main';

const useStyles = makeStyles({
    root: {
        position: 'relative',
        overflow: 'unset',
        border: '7px #DF9F28 solid',
        height: '380px',
    },

    gold: {
        textTransform: 'uppercase',
        background: '-webkit-linear-gradient(top, #FDE08D, #8f6B29)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
    },
    wreath: {
        fill: '#dbc214',
    },
    silver: {
        fill: '#c0c0c0',
    },
    bronze: {
        fill: '#905a18',
    },
});


const ResultShort: FunctionComponent = () => {
    const { state, fetchPlayers } = React.useContext(AppContext);
    const classes = useStyles();

    useEffect(() => {
        fetchPlayers();
    }, []);

    return (
        <Main title={ 'Итоги по окончанию игры' }>

            <Grid container>
                <Grid item xs={ 12 }>
                    <Grid container justify={ 'center' } alignItems={ 'center' } spacing={ 2 }>
                        <Grid item><Wreath className={ classes.wreath } height="40px" width="40px" /></Grid>
                        <Grid item>
                            <Typography className={ classes.gold } component={ 'h1' } variant={ 'h6' }>Игрок Player 1
                                побеждает</Typography>
                        </Grid>
                        <Grid item><Wreath className={ classes.wreath } height="40px" width="40px" /></Grid>
                    </Grid>
                </Grid>
            </Grid>

            <Grid container justify={ 'center' } alignItems={ 'center' } spacing={ 6 }>
                <Grid item xs={ 12 } sm={ 6 } md={ 4 }>
                    <Card className={ classes.root }>
                        <CardMedia
                            component="div"
                            style={ { height: '100%' } }
                            image={ `${ process.env.PUBLIC_URL }/assets/fractions/saxony.jpg` }
                            title="Contemplative Reptile"
                            children={
                                <CardContent style={ { display: 'flex', height: '100%', justifyContent: 'center' } }>
                                    <div
                                        style={ {
                                            position: 'absolute',
                                            top: '-20px',
                                            left: '50%',
                                            transform: 'translate(-50%)',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            borderRadius: '50%',
                                            background: '#000',
                                            width: 60,
                                            height: 60,
                                        } }
                                    >
                                        <Wreath className={ classes.wreath } height="40px" width="40px" />
                                    </div>

                                    <Typography
                                        variant={ 'h1' } style={ {
                                        marginTop: 'auto',
                                        color: '#fff',
                                        fontWeight: 'bold',
                                        textShadow: '2px 2px 2px #000',
                                    } }
                                    >92</Typography>

                                    <div
                                        style={ {
                                            position: 'absolute',
                                            bottom: '-30px',
                                            left: '50%',
                                            transform: 'translate(-50%)',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            borderRadius: '40px',
                                            background: '#000',
                                            fontSize: '24px',
                                            color: '#fff',
                                            padding: '10px 20px',
                                            minWidth: '90%',
                                        } }
                                    >Player 1
                                    </div>
                                </CardContent>
                            }
                        />

                    </Card>
                </Grid>


                <Grid item xs={ 12 } sm={ 6 } md={ 4 }>
                    <Card className={ classes.root } style={ { border: 'none' } }>
                        <CardMedia
                            component="div"
                            style={ { height: '100%' } }
                            image={ `${ process.env.PUBLIC_URL }/assets/fractions/polania.jpg` }
                            title="Contemplative Reptile"
                            children={
                                <CardContent style={ { display: 'flex', height: '100%', justifyContent: 'center' } }>
                                    <div
                                        style={ {
                                            position: 'absolute',
                                            top: '-20px',
                                            left: '50%',
                                            transform: 'translate(-50%)',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            borderRadius: '50%',
                                            background: '#000',
                                            width: 60,
                                            height: 60,
                                        } }
                                    >
                                        <Wreath className={ classes.silver } height="40px" width="40px" />
                                    </div>
                                    <Typography
                                        variant={ 'h1' } style={ {
                                        marginTop: 'auto',
                                        color: '#fff',
                                        fontWeight: 'bold',
                                        textShadow: '2px 2px 2px #000',
                                    } }
                                    >52</Typography>
                                    <div
                                        style={ {
                                            position: 'absolute',
                                            bottom: '-30px',
                                            left: '50%',
                                            transform: 'translate(-50%)',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            borderRadius: '40px',
                                            background: '#000',
                                            fontSize: '24px',
                                            color: '#fff',
                                            padding: '10px 20px',
                                            minWidth: '90%',
                                        } }
                                    >Player 2
                                    </div>
                                </CardContent>
                            }
                        />

                    </Card>
                </Grid>
                <Grid item xs={ 12 } sm={ 6 } md={ 4 }>
                    <Card className={ classes.root } style={ { border: 'none' } }>
                        <CardMedia
                            component="div"
                            style={ { height: '100%' } }
                            image={ `${ process.env.PUBLIC_URL }/assets/fractions/rusvet.jpg` }
                            title="Contemplative Reptile"
                            children={
                                <CardContent style={ { display: 'flex', height: '100%', justifyContent: 'center' } }>
                                    <div
                                        style={ {
                                            position: 'absolute',
                                            top: '-20px',
                                            left: '50%',
                                            transform: 'translate(-50%)',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            borderRadius: '50%',
                                            background: '#000',
                                            width: 60,
                                            height: 60,
                                        } }
                                    >
                                        <Wreath className={ classes.bronze } height="40px" width="40px" />
                                    </div>
                                    <Typography
                                        variant={ 'h1' } style={ {
                                        marginTop: 'auto',
                                        color: '#fff',
                                        fontWeight: 'bold',
                                        textShadow: '2px 2px 2px #000',
                                    } }
                                    >13</Typography>
                                    <div
                                        style={ {
                                            position: 'absolute',
                                            bottom: '-30px',
                                            left: '50%',
                                            transform: 'translate(-50%)',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            borderRadius: '40px',
                                            background: '#000',
                                            fontSize: '24px',
                                            color: '#fff',
                                            padding: '10px 20px',
                                            minWidth: '90%',
                                        } }
                                    >Player 3
                                    </div>
                                </CardContent>
                            }
                        />

                    </Card>
                </Grid>
            </Grid>
        </Main>
    );
};

export default ResultShort;
