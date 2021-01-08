import { yupResolver } from '@hookform/resolvers/yup';
import { Button, Grid, InputAdornment, TextField, Typography } from '@material-ui/core';
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import FavoriteIcon from '@material-ui/icons/Favorite';
import HomeIcon from '@material-ui/icons/Home';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import StarIcon from '@material-ui/icons/Star';
import TerrainIcon from '@material-ui/icons/Terrain';
import React, { FunctionComponent, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { IPlayer, IPoints } from '../features/players/types';
import { calculatePoints} from '../common/scytheLogic';

const text = {
    min:  `Значение не может быть отрицательным`,
    max:  (max: number) => `Значение не может быть больше ${max}`
}

const schema = yup.object().shape({
    gold: yup.number().required().min(0, text.min).integer().typeError('Введите накопленные монеты'),
    popularity: yup.number().required().min(0, text.min).max(18, text.max(18)).integer().typeError('Введите накопленную популярность'),
    stars: yup.number().required().min(0, text.min).max(6, text.max(6)).integer().typeError('Введите накопленные звезды'),
    territories: yup.number().required().min(0, text.min).integer().typeError('Введите кол-во контролируемых территорий'),
    resources: yup.number().required().min(0, text.min).integer().typeError('Введите кол-во контролируемых ресурсов'),
    buildingBonuses: yup.number().required().min(0, text.min).max(9, text.max(9)).integer().typeError('Введите кол-во монет за бонус зданий'),
});

type Props = {
    player: IPlayer;
    editPlayer(formValue: any): void;
}

const ScoreForm: FunctionComponent<Props> = (props) => {
    const { player, editPlayer } = props;

    const { register, handleSubmit, errors, reset } = useForm<IPoints>({
        defaultValues: {
            gold: player?.gold,
            popularity: player?.popularity,
            stars: player?.stars,
            territories: player?.territories,
            resources: player?.resources,
            buildingBonuses: player?.buildingBonuses,
        },
        mode: 'onBlur',
        resolver: yupResolver(schema),
    });

    useEffect(() => {
        reset(player);
    }, [reset, player]);

    const onSubmit = (data: IPoints) => {
        const result = calculatePoints(data);
        editPlayer({
            ...player,
            ...data,
            points: result,
        });
    };

    const handleOnFocus = (event: React.FocusEvent<any>): void => {
        event.target.select();
    };

    return (
        <form onSubmit={ handleSubmit(onSubmit) } autoComplete="off">
            <Grid container direction={ 'column' } spacing={ 2 }>
                <Grid item>
                    <TextField
                        error={ !!errors.gold }
                        helperText={ (errors?.gold as any)?.message }
                        inputRef={ register }
                        id="gold"
                        name="gold"
                        fullWidth
                        variant="outlined"
                        size="small"
                        label="Монеты на руках"
                        type="number"
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
                        error={ !!errors.popularity }
                        helperText={ (errors?.popularity as any)?.message }
                        inputRef={ register }
                        id="popularity"
                        name="popularity"
                        fullWidth
                        variant="outlined"
                        size="small"
                        label="Популярность"
                        type="number"
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
                        error={ !!errors.stars }
                        helperText={ (errors?.stars as any)?.message }
                        inputRef={ register }
                        id="stars"
                        name="stars"
                        fullWidth
                        variant="outlined"
                        size="small"
                        label="Кол-во звезд"
                        type="number"
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
                        error={ !!errors.territories }
                        helperText={ (errors?.territories as any)?.message }
                        inputRef={ register }
                        id="territories"
                        name="territories"
                        fullWidth
                        variant="outlined"
                        size="small"
                        label="Территорий (фабрика дает +3)"
                        type="number"
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
                        error={ !!errors.resources }
                        helperText={ (errors?.resources as any)?.message }
                        inputRef={ register }
                        id="resources"
                        name="resources"
                        fullWidth
                        variant="outlined"
                        size="small"
                        label="Всего ресурсов"
                        type="number"
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
                        error={ !!errors.buildingBonuses }
                        helperText={ (errors?.buildingBonuses as any)?.message }
                        inputRef={ register }
                        id="buildingBonuses"
                        name="buildingBonuses"
                        fullWidth
                        variant="outlined"
                        size="small"
                        label="Бонусы зданий"
                        type="number"
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
                    <Grid container alignItems={ 'center' } justify={ 'space-between' } spacing={ 2 }>
                        <Grid item>
                            <Button type="submit" color="primary" variant="contained">Подсчитать</Button>
                        </Grid>

                        <Grid item>
                            <Typography variant={ 'h6' }>Очков: { player.points }</Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </form>

    );
};

export default ScoreForm;
