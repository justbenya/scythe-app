import { Card, CardContent, MenuItem } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import React, { FunctionComponent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { foundEngNameFractionToUrl, fractions, mats } from '../../common/scytheLogic';
import FractionCharacterImage from '../../components/FractionCharacterImage';
import FractionIcon from '../../components/FractionIcon';
import { RootState } from '../../store/rootReducer';
import { changeFractionPlayer, editPlayer } from './playersSlice';
import { IPlayer, PlayersType } from './types';

const PlayerCard: FunctionComponent = () => {
    const { id = '' } = useParams<any>();

    const players = useSelector<RootState, PlayersType>((state => state.players));
    const player = useSelector<RootState, IPlayer | undefined>((state => (
        Object.values(state.players).find(i => foundEngNameFractionToUrl(i.fraction) === id))));
    const dispatch = useDispatch();

    if (!player) return null;

    const handleChangeName = (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        const changesPlayers = { ...player, name: event.target.value };
        dispatch(editPlayer(changesPlayers));
    };

    const handleChangeFraction = (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>, id: string) => {
        const newFraction = event.target.value;
        const prevFraction = players[id].fraction;
        const isNewFractionSelect = Object.values(players).find(player => player.fraction === newFraction);

        // Если мы выбрали уже задействованную фракцию, поменяем значения местами
        if (isNewFractionSelect) {
            const changesPlayers = { ...players[isNewFractionSelect.id], fraction: prevFraction };
            dispatch(editPlayer(changesPlayers));
        }

        const changesPlayers = { ...players[id], fraction: newFraction };
        dispatch(changeFractionPlayer(changesPlayers));
    };

    const handleChangeMat = (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>, id: string) => {
        const newMat = event.target.value;

        const prevMat = players[id].mat;
        const isNewMatSelect = Object.values(players).find(player => player.mat === newMat);

        if (isNewMatSelect) {
            const changesPlayers = { ...players[isNewMatSelect.id], mat: prevMat };
            dispatch(editPlayer(changesPlayers));
        }

        const changesPlayers = { ...players[id], mat: newMat };
        dispatch(editPlayer(changesPlayers));
    };

    const handleOnFocus = (event: React.FocusEvent<any>): void => {
        event.target.select();
    };

    const onSubmit = (event: React.FormEvent) => {
        event.preventDefault();
    };

    return (
        <Card>
            <FractionCharacterImage { ...fractions.find(i => i.name === player.fraction) } />
            <CardContent>
                <form onSubmit={ onSubmit }>
                    <Grid container spacing={ 2 } direction={ 'column' }>
                        <Grid item xs={ 12 }>
                            <TextField
                                label="Имя"
                                value={ player.name }
                                onChange={ handleChangeName }
                                onFocus={ handleOnFocus }
                                variant="outlined"
                                size="medium"
                                fullWidth
                            />
                        </Grid>

                        <Grid item xs={ 12 }>
                            <Grid container justify={ 'space-between' }>
                                <Grid item>
                                    <TextField
                                        select
                                        SelectProps={ {
                                            renderValue: (value: any) => {
                                                const fraction = fractions.find(i => i.name === value);
                                                return (
                                                    <div
                                                        style={ {
                                                            display: 'flex',
                                                            alignItems: 'center',
                                                        } }
                                                    >
                                                        { fraction && <FractionIcon { ...fraction } /> }
                                                    </div>);
                                            },
                                        } }
                                        label="Фракция"
                                        value={ player.fraction }
                                        onChange={ (event) => handleChangeFraction(event, player.id) }
                                        variant="outlined"
                                        size="small"
                                    >
                                        { fractions.map((value) => (
                                            <MenuItem key={ value.name } value={ value.name }>
                                                <FractionIcon { ...value } />&nbsp;&nbsp;&nbsp;{ value.name }
                                            </MenuItem>
                                        )) }
                                    </TextField>
                                </Grid>
                                <Grid item className="mats-input">
                                    <TextField
                                        select
                                        label="Планшет"
                                        value={ player.mat }
                                        onChange={ (event) => handleChangeMat(event, player.id) }
                                        variant="outlined"
                                        size="medium"
                                        fullWidth
                                    >
                                        { mats.map((value) => (
                                            <MenuItem key={ value } value={ value }>
                                                { value }
                                            </MenuItem>
                                        )) }
                                    </TextField>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </form>
            </CardContent>
        </Card>
    );
};


export default PlayerCard;
