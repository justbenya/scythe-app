import { Button, Grid, TextField, Typography } from '@material-ui/core';
import Container from '@material-ui/core/Container';
import { useLocalStorage } from '@rehooks/local-storage';
import React, { FunctionComponent, useState } from 'react';
import { Link } from 'react-router-dom';
import { IPlayer } from '../components/PlayerRow';
import { calculatePoints } from '../ScytheLogic';

interface OwnProps {
}

type Props = OwnProps;

export interface IPoints {
    gold: number;
    popularity: number;
    stars: number;
    territories: number;
    resources: number;
    buildingBonuses: number;
}

const Score: FunctionComponent<Props> = (props: any) => {
    const [storagePlayers] = useLocalStorage<Array<IPlayer>>('players');
    const player = storagePlayers ? storagePlayers[props.match.params.id] : {
        name: '',
    };
    const prevPlayer = storagePlayers && storagePlayers[Number(props.match.params.id) - 1] ? Number(props.match.params.id) - 1 : null;
    const nextPlayer = storagePlayers && storagePlayers[Number(props.match.params.id) + 1] ? Number(props.match.params.id) + 1 : null;


    const [points, setPoints] = useState<IPoints>({
        gold: 0,
        popularity: 0,
        stars: 0,
        territories: 0,
        resources: 0,
        buildingBonuses: 0,
    });

    const [result, setResult] = useState(0);

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPoints((points) => ({ ...points, [event.target.id]: parseInt(event.target.value) }));
    };

    const handleSubmit = (event: React.FormEvent<EventTarget>): void => {
        event.preventDefault();
        setResult(calculatePoints(points));
    };

    return (
        <Container fixed>
            <main style={ { height: '90vh', paddingTop: 30 } }>

                <Typography variant={ 'h5' }>Подсчет очков</Typography>
                <Typography variant={ 'h6' }>Имя игрока: { player.name }</Typography>

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
                                InputLabelProps={ { shrink: true } }
                                onChange={ handleInputChange }
                            />
                        </Grid>

                        <Grid item>
                            <Button type="submit" color="primary" variant="contained">Результат</Button>
                            <Typography>
                                Очков: { result }
                            </Typography>
                        </Grid>
                    </Grid>
                </form>

                <Button
                    disabled={ prevPlayer === 0 ? false : !Boolean(prevPlayer) }
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
            </main>
        </Container>
    );
};

export default Score;
