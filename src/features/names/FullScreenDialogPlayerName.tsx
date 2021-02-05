import { Divider, IconButton, TextField } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Slide from '@material-ui/core/Slide';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { TransitionProps } from '@material-ui/core/transitions';
import Typography from '@material-ui/core/Typography';
import DeleteIcon from '@material-ui/icons/Delete';
import { createFilterOptions } from '@material-ui/lab/Autocomplete';
import useAutocomplete from '@material-ui/lab/useAutocomplete';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { editPlayer } from '../players/playersSlice';
import { getPlayerByFaction } from '../players/selectors';
import { addName, changeName, deleteName, INames } from './namesSlice';
import { getNames } from './selectors';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        dialogPaper: {
            backgroundColor: theme.palette.background.default,
        },
        list: {
            backgroundColor: theme.palette.background.paper,
            cursor: 'pointer',
        },
        title: {
            paddingLeft: 18,
            fontSize: 14,
            fontWeight: 'bold',
        },
        item: {
            display: 'flex',
            width: '100%',
            height: 30,
            justifyContent: 'space-between',
            alignItems: 'center',
        },
        sectionText: { padding: '110px 15px 0 15px' },
        listItem: {
            paddingRight: 0,
            '&:hover': {
                backgroundColor: 'rgba(0, 0, 0, 0.2)',
                transition: 'all .2s'
            }
        },
    }),
);

const Transition = React.forwardRef(function Transition(
    props: TransitionProps & { children?: React.ReactElement },
    ref: React.Ref<unknown>,
) {
    return <Slide direction="up" ref={ ref } { ...props } />;
});

const filter = createFilterOptions<INames>();

export function FullScreenDialogPlayerName() {
    const classes = useStyles();
    const { id } = useParams<{ id: string }>();
    const names = useSelector(getNames);
    const dispatch = useDispatch();
    const player = useSelector(getPlayerByFaction(id));

    const [open, setOpen] = React.useState(false);

    const {
        getInputProps,
        getOptionProps,
        groupedOptions,
    } = useAutocomplete({
        id: 'use-autocomplete-names',
        options: names,
        value: player?.name as unknown as INames,
        debug: true,
        getOptionLabel: (option) => {
            if (typeof option === 'string') {
                return option;
            }
            if (option.inputValue) {
                return option.inputValue;
            }
            return option.name;
        },
        filterOptions: (options, params) => {
            const filtered = filter(options, params);
            const isNameNotEmpty = params.inputValue !== '';
            const isNameUnique = params.inputValue !== player?.name;
            const isNameExist = names.findIndex(i => i.name === params.inputValue) === -1;
            if (isNameNotEmpty && isNameUnique && isNameExist) {
                filtered.push({
                    inputValue: params.inputValue,
                    name: `Добавить «${ params.inputValue }»`,
                });
            }

            return filtered;
        },
        onChange: (event, newValue) => {
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
        },
    });

    const createName = (obj: INames) => {
        dispatch(addName(obj));
        if (player?.id) {
            dispatch(editPlayer({ ...player, name: obj.name }));
        }

        setOpen(false);
    };

    const setName = (obj: INames) => {
        dispatch(changeName(obj.name));
        if (player?.id) {
            dispatch(editPlayer({ ...player, name: obj.name }));
        }

        setOpen(false);
    };

    const handleDeleteName = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>, name: string) => {
        dispatch(deleteName(name));
        event.stopPropagation();
    };

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleFocus = (event: any) => {
        event.target.select();
    };

    return (
        <>
            <TextField
                value={ player?.name || 'Player' }
                label="Имя"
                variant="outlined"
                size="medium"
                fullWidth
                onChange={ handleClickOpen }
                onClick={ handleClickOpen }
                inputProps={ {
                    disabled: true,
                    style: { pointerEvents: 'none' },
                } }
            />

            <Dialog
                fullScreen
                open={ open }
                onClose={ handleClose }
                TransitionComponent={ Transition }
                PaperProps={ { className: classes.dialogPaper } }
            >
                <AppBar position={ 'fixed' } color={ 'inherit' } style={ { padding: '15px 0 10px 0' } }>
                    <Grid container direction={ 'column' } spacing={ 2 }>
                        <Grid container justify={ 'space-between' } alignItems={ 'center' } spacing={ 0 }>
                            <Grid item xs />
                            <Grid item xs>
                                <Typography variant="h5" className={ classes.title }>
                                    Имя
                                </Typography>
                            </Grid>
                            <Grid item style={ { paddingRight: 15 } }>
                                <Button color="primary" onClick={ handleClose }>
                                    готово
                                </Button>
                            </Grid>
                        </Grid>

                        <Divider />

                        <Grid item style={ { padding: '5px 20px' } }>
                            <TextField { ...getInputProps() } fullWidth autoFocus onFocus={ handleFocus } />
                        </Grid>
                    </Grid>
                </AppBar>

                <Typography className={ classes.sectionText } variant={ 'overline' }>
                    Выберите вариант или создайте
                </Typography>

                { (names.length > 0 || groupedOptions.length > 0) &&
                <List className={ classes.list } disablePadding>
                    <Divider />
                    {
                        groupedOptions.length > 0
                            ? groupedOptions.map((option, index) => (
                                <React.Fragment key={ option.name + index }>
                                    <ListItem className={ classes.listItem } { ...getOptionProps({ option, index }) }>
                                        { renderItem(option) }
                                    </ListItem>
                                    <Divider />
                                </React.Fragment>
                            ))
                            : names.map((item, index) => (
                                <React.Fragment key={ item.name + index }>
                                    <ListItem className={ classes.listItem } onClick={ () => setName({ name: item.name }) }>
                                        { renderItem(item) }
                                    </ListItem>
                                    <Divider />
                                </React.Fragment>
                            ))
                    }
                </List>
                }
            </Dialog>
        </>
    );

    function renderItem(option: INames) {
        return (
            <div className={ classes.item }>
                <p>{ option.name }</p>

                { !option.inputValue &&
                <IconButton aria-label="delete" onClick={ (event) => handleDeleteName(event, option.name) }>
                    <DeleteIcon fontSize="small" />
                </IconButton> }
            </div>
        );
    }
}
