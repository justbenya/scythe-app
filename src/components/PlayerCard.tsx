import { Card, CardActions, CardContent, MenuItem } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import keyBy from 'lodash-es/keyBy';
import React, { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';
import AppContext from '../context/AppContext';
import { fractions, IPlayer, mats } from '../ScytheLogic';
import FractionCharacterImage from './FractionCharacterImage';
import FractionIcon from './FractionIcon';



const PlayerCard: FunctionComponent<IPlayer | any> = (props) => {
    const {
        name, fraction, mat, id,
    } = props;

    const {
        players,
        editPlayer,
        deletePlayer,
    } = React.useContext(AppContext);

    const handleChangeName = (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>, id: string) => {
        // @ts-ignore
        const changesPlayers = { ...players[id], name: event.target.value };
        editPlayer(changesPlayers);
    };

    const handleChangeFraction = (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>, id: string) => {
        const newFraction = event.target.value;
        // @ts-ignore
        const prevFraction = players[id].fraction;
        const isNewFractionSelect = Object.values(players).find(player => player.fraction === newFraction);

        // Если мы выбрали уже задействованную фракцию, поменяем значения местами
        if (isNewFractionSelect) {
            // @ts-ignore
            const changesPlayers = { ...players[isNewFractionSelect.id], fraction: prevFraction };
            editPlayer(changesPlayers);
        }

        // @ts-ignore
        const changesPlayers = { ...players[id], fraction: newFraction };
        editPlayer(changesPlayers);
    };

    const handleChangeMat = (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>, id: string) => {
        const newMat = event.target.value;
        // @ts-ignore
        const prevMat = players[id].mat;
        const isNewMatSelect = Object.values(players).find(player => player.mat === newMat);

        if (isNewMatSelect) {
            // @ts-ignore
            const changesPlayers = { ...players[isNewMatSelect.id], mat: prevMat };
            editPlayer(changesPlayers);
        }

        // @ts-ignore
        const changesPlayers = { ...players[id], mat: newMat };
        editPlayer(changesPlayers);
    };

    const handleDeletePlayer = (id: string) => {
        deletePlayer(id);
    };

    return (
        <Card>
            <FractionCharacterImage { ...fractions.find(i => i.name === fraction) } />
            <CardContent>
                <Grid container spacing={ 2 } direction={ 'column' }>
                    <Grid item xs={ 12 }>
                        <TextField
                            label="Имя"
                            defaultValue={ name }
                            onChange={ (event) => handleChangeName(event, id) }
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
                                    value={ fraction }
                                    onChange={ (event) => handleChangeFraction(event, id) }
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
                                    value={ mat }
                                    onChange={ (event) => handleChangeMat(event, id) }
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
            </CardContent>

            <CardActions disableSpacing style={ { paddingTop: 0, display: 'flex', justifyContent: 'flex-end' } }>
                <Button
                    style={ { marginRight: 'auto' } }
                    component={ Link } to={ `/score/${ keyBy(fractions, 'name')[fraction].nameEng }` }
                    color="primary"
                    size="medium"
                >
                    Подсчитать очки
                </Button>

                <Button
                    color="secondary"
                    size="medium"
                    onClick={ () => handleDeletePlayer(id) }
                >
                    Удалить
                </Button>
            </CardActions>
        </Card>
    );
};


export default PlayerCard;
