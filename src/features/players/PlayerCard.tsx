import { Card, CardActions, CardContent, MenuItem } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import React, { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';
import FractionCharacterImage from '../../components/FractionCharacterImage';
import FractionIcon from '../../components/FractionIcon';
import { foundEngNameFractionToUrl, fractions, IPlayer, mats } from '../../ScytheLogic';
import { PlayersType } from './types';
import { editPlayer, deletePlayer } from './playersSlice';

type Props = {
    player: IPlayer;
    players: PlayersType;
    editPlayer: typeof editPlayer;
    deletePlayer: typeof deletePlayer;
}

const PlayerCard: FunctionComponent<Props> = (props) => {
    const {
        player, players, editPlayer, deletePlayer
    } = props;

    const handleChangeName = (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        const changesPlayers = { ...player, name: event.target.value };
        editPlayer(changesPlayers);
    };

    const handleChangeFraction = (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>, id: string) => {
        const newFraction = event.target.value;
        const prevFraction = players[id].fraction;
        const isNewFractionSelect = Object.values(players).find(player => player.fraction === newFraction);

        // Если мы выбрали уже задействованную фракцию, поменяем значения местами
        if (isNewFractionSelect) {
            const changesPlayers = { ...players[isNewFractionSelect.id], fraction: prevFraction };
            editPlayer(changesPlayers);
        }

        const changesPlayers = { ...players[id], fraction: newFraction };
        editPlayer(changesPlayers);
    };

    const handleChangeMat = (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>, id: string) => {
        const newMat = event.target.value;

        const prevMat = players[id].mat;
        const isNewMatSelect = Object.values(players).find(player => player.mat === newMat);

        if (isNewMatSelect) {
            const changesPlayers = { ...players[isNewMatSelect.id], mat: prevMat };
            editPlayer(changesPlayers);
        }

        const changesPlayers = { ...players[id], mat: newMat };
        editPlayer(changesPlayers);
    };

    const handleDeletePlayer = (id: string) => {
        deletePlayer(id);
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
                                defaultValue={ player.name }
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

            <CardActions disableSpacing style={ { paddingTop: 0, display: 'flex', justifyContent: 'flex-end' } }>
                <Button
                    style={ { marginRight: 'auto' } }
                    component={ Link } to={ `/score/${ foundEngNameFractionToUrl(player.fraction) }` }
                    color="primary"
                    size="medium"
                >
                    Подсчитать очки
                </Button>

                <Button
                    color="secondary"
                    size="medium"
                    onClick={ () => handleDeletePlayer(player.id) }
                >
                    Удалить
                </Button>
            </CardActions>
        </Card>
    );
};


export default PlayerCard;
