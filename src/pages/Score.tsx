import { Button, Grid, InputAdornment, TextField, Typography } from '@material-ui/core';
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import FavoriteIcon from '@material-ui/icons/Favorite';
import HomeIcon from '@material-ui/icons/Home';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import StarIcon from '@material-ui/icons/Star';
import TerrainIcon from '@material-ui/icons/Terrain';
import React, { FunctionComponent, useEffect } from 'react';
import { Link } from 'react-router-dom';
import AppContext from '../context/AppContext';
import Main from '../layouts/Main';
import { calculatePoints } from '../ScytheLogic';

const Score: FunctionComponent = (props: any) => {
    const { state, fetchPlayers, editPlayer } = React.useContext(AppContext);

    useEffect(() => {
        fetchPlayers();
    }, []);

    const player = state[props.match.params.id];

    let prevPlayer = null;
    let nextPlayer = null;
    if (Object.values(state).length > 0) {
        const sorted = Object.values(state).sort((a, b) =>
            parseInt(a.mat.slice(-2, -1)) - parseInt(b.mat.slice(-2, -1)));

        const currentIndex = sorted.findIndex(item => item.id === player.id);

        prevPlayer = currentIndex >= 0 && Object.values(sorted)[currentIndex - 1] ? Object.values(sorted)[currentIndex - 1].id : null;
        nextPlayer = currentIndex >= 0 && Object.values(sorted)[currentIndex + 1] ? Object.values(sorted)[currentIndex + 1].id : null;
    }

    const handleOnFocus = (event: React.FocusEvent<any>): void => {
        event.target.select()
    };

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        editPlayer({ ...player, [event.target.id]: parseInt(event.target.value) });
    };

    const handleSubmit = (event: React.FormEvent<EventTarget>): void => {
        event.preventDefault();
        const points = {
            gold: player.gold,
            popularity: player.popularity,
            stars: player.stars,
            territories: player.territories,
            resources: player.resources,
            buildingBonuses: player.buildingBonuses,
        };
        const result = calculatePoints(points);
        editPlayer({
            ...player,
            points: result,
        });
    };

    if (!player) return <div>Loading</div>;

    return (
        <Main title={ 'Подсчет очков' }>
            <Grid container direction={ 'column' } spacing={ 2 }>
                <Grid item>
                    <Typography variant={ 'h6' }>Игрок: { player.name }</Typography>
                </Grid>

                <Grid item>
                    <form onSubmit={ handleSubmit } autoComplete="off">
                        <Grid container direction={ 'column' } spacing={ 2 }>
                            <Grid item>
                                <TextField
                                    id="gold"
                                    fullWidth
                                    variant="outlined"
                                    size="small"
                                    label="Монеты на руках"
                                    type="number"
                                    value={ player.gold }
                                    InputLabelProps={ { shrink: true } }
                                    onChange={ handleInputChange }
                                    onFocus={ handleOnFocus }
                                    InputProps={ {
                                        startAdornment: (
                                            <InputAdornment position="start">
                                                <MonetizationOnIcon />
                                            </InputAdornment>
                                        ),
                                    } }
                                />
                            </Grid>

                            <Grid item>
                                <TextField
                                    id="popularity"
                                    fullWidth
                                    variant="outlined"
                                    size="small"
                                    label="Популярность"
                                    type="number"
                                    value={ player.popularity }
                                    InputLabelProps={ { shrink: true } }
                                    onChange={ handleInputChange }
                                    onFocus={ handleOnFocus }
                                    InputProps={ {
                                        startAdornment: (
                                            <InputAdornment position="start">
                                                <FavoriteIcon />
                                            </InputAdornment>
                                        ),
                                    } }
                                />
                            </Grid>

                            <Grid item>
                                <TextField
                                    id="stars"
                                    fullWidth
                                    variant="outlined"
                                    size="small"
                                    label="Кол-во звезд"
                                    type="number"
                                    value={ player.stars }
                                    InputLabelProps={ { shrink: true } }
                                    onChange={ handleInputChange }
                                    onFocus={ handleOnFocus }
                                    InputProps={ {
                                        startAdornment: (
                                            <InputAdornment position="start">
                                                <StarIcon />
                                            </InputAdornment>
                                        ),
                                    } }
                                />
                            </Grid>

                            <Grid item>
                                <TextField
                                    id="territories"
                                    fullWidth
                                    variant="outlined"
                                    size="small"
                                    label="Территорий (фабрика дает +3)"
                                    type="number"
                                    value={ player.territories }
                                    InputLabelProps={ { shrink: true } }
                                    onChange={ handleInputChange }
                                    onFocus={ handleOnFocus }
                                    InputProps={ {
                                        startAdornment: (
                                            <InputAdornment position="start">
                                                <TerrainIcon />
                                            </InputAdornment>
                                        ),
                                    } }
                                />
                            </Grid>

                            <Grid item>
                                <TextField
                                    id="resources"
                                    fullWidth
                                    variant="outlined"
                                    size="small"
                                    label="Всего ресурсов"
                                    type="number"
                                    value={ player.resources }
                                    InputLabelProps={ { shrink: true } }
                                    onChange={ handleInputChange }
                                    onFocus={ handleOnFocus }
                                    InputProps={ {
                                        startAdornment: (
                                            <InputAdornment position="start">
                                                <DonutLargeIcon />
                                            </InputAdornment>
                                        ),
                                    } }
                                />
                            </Grid>

                            <Grid item>
                                <TextField
                                    id="buildingBonuses"
                                    fullWidth
                                    variant="outlined"
                                    size="small"
                                    label="Бонусы зданий"
                                    type="number"
                                    value={ player.buildingBonuses }
                                    InputLabelProps={ { shrink: true } }
                                    onChange={ handleInputChange }
                                    onFocus={ handleOnFocus }
                                    InputProps={ {
                                        startAdornment: (
                                            <InputAdornment position="start">
                                                <HomeIcon />
                                            </InputAdornment>
                                        ),
                                    } }
                                />
                            </Grid>

                            <Grid item>
                                <Button type="submit" color="primary" variant="contained">Результат</Button>
                                <Typography>
                                    Очков: { player.points }
                                </Typography>
                            </Grid>
                        </Grid>
                    </form>
                </Grid>
            </Grid>


            <Button
                disabled={ !Boolean(prevPlayer) }
                variant="contained" color="primary"
                component={ Link } to={ `/score/${ prevPlayer }` }
            >
                Предыдущий игрок
            </Button>

            <Button
                disabled={ !Boolean(nextPlayer) }
                variant="contained" color="primary"
                component={ Link } to={ `/score/${ nextPlayer }` }
            >
                Следующий игрок
            </Button>

            <Button
                variant="contained" color="secondary"
                component={ Link } to={ `/result` }
            >
                Узнать кто победил
            </Button>
        </Main>
    );
};

export default Score;
