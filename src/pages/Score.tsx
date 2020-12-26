import { Button, Grid, TextField, Typography } from '@material-ui/core';
import Container from '@material-ui/core/Container';
import React, { FunctionComponent, useEffect } from 'react';
import { Link } from 'react-router-dom';
import AppContext from '../context/AppContext';
import { calculatePoints } from '../ScytheLogic';

interface OwnProps {
}

type Props = OwnProps;

const Score: FunctionComponent<Props> = (props: any) => {
    const { state, fetchPlayer, editPlayer } = React.useContext(AppContext);

    useEffect(() => {
        fetchPlayer(props.match.params.id);
    }, []);

    const player = state[props.match.params.id];

    let prevPlayer = null;
    let nextPlayer = null;
    if (Object.values(state).length > 0) {
        const currentIndex = Object.values(state).findIndex(item => item.id === player.id);

        prevPlayer = currentIndex >= 0 && Object.values(state)[currentIndex - 1] ? Object.values(state)[currentIndex - 1].id : null;
        nextPlayer = currentIndex >= 0 && Object.values(state)[currentIndex + 1] ? Object.values(state)[currentIndex + 1].id : null;
    }

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
        <Container fixed>
            <main style={ { height: '90vh', paddingTop: 30 } }>

                <Typography variant={ 'h5' }>Подсчет очков</Typography>
                <Typography variant={ 'h6' }>
                    Имя игрока: { player.name }
                </Typography>

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
                            />
                        </Grid>

                        <Grid item>
                            <TextField
                                id="territories"
                                fullWidth
                                variant="outlined"
                                size="small"
                                label="Территорий"
                                type="number"
                                value={ player.territories }
                                InputLabelProps={ { shrink: true } }
                                onChange={ handleInputChange }
                            />
                        </Grid>

                        <Grid item>
                            <TextField
                                id="resources"
                                fullWidth
                                variant="outlined"
                                size="small"
                                label="Ресурсы"
                                type="number"
                                value={ player.resources }
                                InputLabelProps={ { shrink: true } }
                                onChange={ handleInputChange }
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
            </main>
        </Container>
    );
};

export default Score;
