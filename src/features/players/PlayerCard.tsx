import { Card, CardContent, MenuItem } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import React, { FunctionComponent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { foundEngNameFactionToUrl, factions, mats } from '../../common/scytheLogic';
import FactionCharacterImage from '../../components/FactionCharacterImage';
import FactionIcon from '../../components/FactionIcon';
import { RootState } from '../../store/rootReducer';
import { changeFactionPlayer, editPlayer } from './playersSlice';
import { IPlayer, PlayersType } from './types';

const PlayerCard: FunctionComponent = () => {
    const { id = '' } = useParams<any>();

    const players = useSelector<RootState, PlayersType>((state => state.players));
    const player = useSelector<RootState, IPlayer | undefined>((state => (
        Object.values(state.players).find(i => foundEngNameFactionToUrl(i.faction) === id))));
    const dispatch = useDispatch();

    if (!player) return null;

    const handleChangeName = (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        const changesPlayers = { ...player, name: event.target.value };
        dispatch(editPlayer(changesPlayers));
    };

    const handleChangeFaction = (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>, id: string) => {
        const newFaction = event.target.value;
        const prevFaction = players[id].faction;
        const isNewFactionSelect = Object.values(players).find(player => player.faction === newFaction);

        // Если мы выбрали уже задействованную фракцию, поменяем значения местами
        if (isNewFactionSelect) {
            const changesPlayers = { ...players[isNewFactionSelect.id], faction: prevFaction };
            dispatch(editPlayer(changesPlayers));
        }

        const changesPlayers = { ...players[id], faction: newFaction };
        dispatch(changeFactionPlayer(changesPlayers));
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
            <FactionCharacterImage { ...factions.find(i => i.name === player.faction) } />
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
                                                const faction = factions.find(i => i.name === value);
                                                return (
                                                    <div
                                                        style={ {
                                                            display: 'flex',
                                                            alignItems: 'center',
                                                        } }
                                                    >
                                                        { faction && <FactionIcon { ...faction } /> }
                                                    </div>);
                                            },
                                        } }
                                        label="Фракция"
                                        value={ player.faction }
                                        onChange={ (event) => handleChangeFaction(event, player.id) }
                                        variant="outlined"
                                        size="small"
                                    >
                                        { factions.map((value) => (
                                            <MenuItem key={ value.name } value={ value.name }>
                                                <FactionIcon { ...value } />&nbsp;&nbsp;&nbsp;{ value.name }
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
