import { IconButton } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import DeleteIcon from '@material-ui/icons/Delete';
import Autocomplete, { createFilterOptions } from '@material-ui/lab/Autocomplete';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { editPlayer } from '../players/playersSlice';
import { getPlayerByFaction } from '../players/selectors';
import { addName, changeName, deleteName, INames } from './namesSlice';
import { getNames } from './selectors';

const filter = createFilterOptions<INames>();

export function AutocompletePlayerName() {
    const { id } = useParams<{ id: string }>();
    const names = useSelector(getNames);
    const dispatch = useDispatch();
    const player = useSelector(getPlayerByFaction(id));

    const createName = (obj: INames) => {
        dispatch(addName(obj));
        if (player?.id) {
            dispatch(editPlayer({ ...player, name: obj.name }));
        }
    };

    const setName = (obj: INames) => {
        dispatch(changeName(obj.name));
        if (player?.id) {
            dispatch(editPlayer({ ...player, name: obj.name }));
        }
    };

    const handleDeleteName = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>, name: string) => {
        dispatch(deleteName(name));
        event.stopPropagation();
    };

    return (
        <Autocomplete
            value={ { name: player?.name || 'Player' } }
            onChange={ (event, newValue) => {
                if (typeof newValue === 'string') {
                    createName({
                        name: newValue,
                    });
                } else if (newValue && newValue.inputValue) {
                    createName({
                        // Срабатывает, когда вводим имя
                        name: newValue.inputValue,
                    });
                } else if (newValue) {
                    if (player?.name === newValue.name) {
                        return;
                    }
                    // Срабатывает, когда выбираем уже из доступных имен
                    setName({ name: newValue.name });
                }
            } }
            filterOptions={ (options, params) => {
                const filtered = filter(options, params);

                const isNameNotEmpty = params.inputValue !== '';
                const isNameUnique = params.inputValue !== player?.name;
                const isNameExist = names.findIndex(i => i.name === params.inputValue) === -1;
                if (isNameNotEmpty && isNameUnique && isNameExist) {
                    filtered.push({
                        inputValue: params.inputValue,
                        name: `Добавить "${ params.inputValue }"`,
                    });
                }

                return filtered;
            } }
            selectOnFocus
            clearOnBlur
            handleHomeEndKeys
            options={ names }
            getOptionLabel={ (option) => {
                if (typeof option === 'string') {
                    return option;
                }

                if (option?.inputValue) {
                    return option.inputValue;
                }

                return option?.name;
            } }
            renderOption={ (option) => {
                if (option.inputValue) return option.name;
                return (
                    <div
                        style={ {
                            display: 'flex',
                            width: '100%',
                            height: 30,
                            justifyContent: 'space-between',
                            alignItems: 'center',
                        } }
                    >
                        <p>{ option.name }</p>
                        <IconButton aria-label="delete" onClick={ (event) => handleDeleteName(event, option.name) }>
                            <DeleteIcon fontSize="small" />
                        </IconButton>
                    </div>
                );
            } }
            freeSolo
            renderInput={ (params) => (
                <TextField
                    { ...params }
                    label="Имя"
                    variant="outlined"
                    size="medium"
                    fullWidth
                />
            ) }
        />
    );
}
