import { MenuItem } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import LocalAtmIcon from '@material-ui/icons/LocalAtm';
import React, { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';
import AppContext from '../context/AppContext';
import { IPlayer } from '../context/Types';
import { fractions, mats } from '../ScytheLogic';


const PlayerRow: FunctionComponent<IPlayer | any> = (props) => {
    const {
        name, fraction, mat, id,
    } = props;

    const {
        state: players,
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
        <Grid item style={ { marginTop: 20 } }>

            {/*todo поменять размеры для дропдауна*/ }
            <Grid container spacing={ 4 }>
                <Grid item>
                    <TextField
                        label="Имя"
                        defaultValue={ name }
                        onChange={ (event) => handleChangeName(event, id) }
                        variant="outlined"
                        size="small"
                    />
                </Grid>

                <Grid item>
                    <TextField
                        select
                        label="Фракция"
                        value={ fraction }
                        onChange={ (event) => handleChangeFraction(event, id) }
                        variant="outlined"
                        size="small"
                    >
                        { fractions.map((value) => (
                            <MenuItem key={ value } value={ value }>
                                { value }
                            </MenuItem>
                        )) }
                    </TextField>
                </Grid>

                <Grid item>
                    <TextField
                        select
                        label="Планшет"
                        value={ mat }
                        onChange={ (event) => handleChangeMat(event, id) }
                        variant="outlined"
                        size="small"
                    >
                        { mats.map((value) => (
                            <MenuItem key={ value } value={ value }>
                                { value }
                            </MenuItem>
                        )) }
                    </TextField>
                </Grid>

                <Grid item>
                    <Link to={ `/score/${ id }` }>
                        <LocalAtmIcon fontSize="large" />
                    </Link>
                </Grid>

                <Grid item>
                    <HighlightOffIcon onClick={ () => handleDeletePlayer(id) } fontSize="large" />
                </Grid>
            </Grid>


        </Grid>
    );
};

export default PlayerRow;
