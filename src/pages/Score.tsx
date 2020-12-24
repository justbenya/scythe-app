import { Button, Grid, TextField, Typography } from '@material-ui/core';
import Container from '@material-ui/core/Container';
import React, { FunctionComponent, useState } from 'react';
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

const Score: FunctionComponent<Props> = (props) => {

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

                <Typography variant={ 'h1' }>Подсчет очков</Typography>
                <Typography variant={ 'h2' }>Имя игрока: </Typography>

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

                <Button>Предыдущий игрок</Button>
                <Button>Следующий игрок</Button>

            </main>
        </Container>
    );
};

export default Score;
