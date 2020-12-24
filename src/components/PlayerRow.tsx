import { MenuItem } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import LocalAtmIcon from '@material-ui/icons/LocalAtm';
import React, { FunctionComponent } from 'react';
import { fractions, mats } from '../ScytheLogic';

export interface IPlayer {
    name: string;
    fraction: string;
    mat: string;
}

const PlayerRow: FunctionComponent<IPlayer | any> = (props) => {
    const {
        name, fraction, mat, index,
        handleChangeName, handleChangeFraction, handleChangeMat, handleDeletePlayer,
    } = props;

    return (
        <Grid item style={ { marginTop: 20 } }>

            {/*todo поменять размеры для дропдауна*/ }
            <Grid container spacing={ 4 }>
                <Grid item>
                    <TextField
                        label="Имя"
                        defaultValue={ name }
                        onChange={ (event) => handleChangeName(event, index) }
                        variant="outlined"
                        size="small"
                    />
                </Grid>

                <Grid item>
                    <TextField
                        select
                        label="Фракция"
                        value={ fraction }
                        onChange={ (event) => handleChangeFraction(event, index) }
                        variant="outlined"
                        size="small"
                    >
                        { fractions.map((option) => (
                            <MenuItem key={ option.value } value={ option.value }>
                                { option.label }
                            </MenuItem>
                        )) }
                    </TextField>
                </Grid>

                <Grid item>
                    <TextField
                        select
                        label="Планшет"
                        value={ mat }
                        onChange={ (event) => handleChangeMat(event, index) }
                        variant="outlined"
                        size="small"
                    >
                        { mats.map((option) => (
                            <MenuItem key={ option.value } value={ option.value }>
                                { option.label }
                            </MenuItem>
                        )) }
                    </TextField>
                </Grid>

                <Grid item>
                    <LocalAtmIcon fontSize="large" />
                </Grid>

                <Grid item>
                    <HighlightOffIcon onClick={ () => handleDeletePlayer(index) } fontSize="large" />
                </Grid>
            </Grid>


        </Grid>
    );
};

export default PlayerRow;
