import { Button, Card, CardActions, CardContent, Collapse, IconButton, MenuItem } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { useWindowWidth } from '@react-hook/window-size';
import clsx from 'clsx';
import React, { FunctionComponent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { factions, findEngNameFactionToUrl, mats } from '../../common/scytheLogic';
import FactionCharacterImage from '../../components/FactionCharacterImage';
import FactionIcon from '../../components/FactionIcon';
import { RootState } from '../../store/rootReducer';
import { changeFactionPlayer, deletePlayer, editPlayer } from './playersSlice';
import { IPlayer, PlayersType } from './types';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            maxWidth: 345,
        },
        expand: {
            transform: 'rotate(0deg)',
            marginLeft: 'auto',
            transition: theme.transitions.create('transform', {
                duration: theme.transitions.duration.shortest,
            }),
        },
        cardActions: {
            paddingBottom: 0,
            paddingTop: 0,
        },
        cardContent: {
            paddingTop: 0,
        },
        expandOpen: {
            transform: 'rotate(180deg)',
        },
        slider: {
            overflow: 'auto',
            maxWidth: 1200,
            margin: '0 auto',
        },
        sliderBody: {
            overflow: 'auto',
            width: '100%',
            height: 350,
            textAlign: 'center',
        },
        sliderImage: {
            width: 'auto',
            height: 345,
        },
    }),
);

const PlayerCard: FunctionComponent = () => {
    const { id = '' } = useParams<any>();
    const windowWidth = useWindowWidth();

    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);
    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    const players = useSelector<RootState, PlayersType>((state => state.players));
    const player = useSelector<RootState, IPlayer | undefined>((state => (
        Object.values(state.players).find(i => findEngNameFactionToUrl(i.faction) === id))));
    const dispatch = useDispatch();
    const history = useHistory();

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

    const handleDeletePlayer = () => {
        dispatch(deletePlayer(player.id));
        history.push('/');
    };

    return (
        <Card>
            <FactionCharacterImage { ...factions.find(i => i.name === player.faction) } />
            <CardContent>
                <Grid container spacing={ 2 } direction={ 'row' }>
                    <Grid item xs={ 12 } sm={ 6 }>
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

                    <Grid item xs>
                        <TextField
                            select
                            label="Планшет"
                            value={ player.mat }
                            onChange={ (event) => handleChangeMat(event, player.id) }
                            variant="outlined"
                            size="medium"
                            fullWidth
                        >
                            { mats.map((mat) => (
                                <MenuItem key={ mat.name } value={ mat.name }>
                                    { mat.name }
                                </MenuItem>
                            )) }
                        </TextField>
                    </Grid>
                </Grid>
            </CardContent>

            <CardActions disableSpacing className={ classes.cardActions }>
                <Button
                    color="secondary"
                    size="medium"
                    onClick={ handleDeletePlayer }
                >
                    Удалить
                </Button>

                <IconButton
                    className={ clsx(classes.expand, {
                        [classes.expandOpen]: expanded,
                    }) }
                    onClick={ handleExpandClick }
                    aria-expanded={ expanded }
                    aria-label="show mat"
                >
                    <ExpandMoreIcon />
                </IconButton>
            </CardActions>

            <Collapse in={ expanded } timeout="auto" unmountOnExit>
                <CardContent className={ classes.cardContent }>
                    <div className={ classes.slider } style={ { width: windowWidth - 65 } }>
                        <div className={ classes.sliderBody }>
                            <img
                                className={ classes.sliderImage }
                                src={ `${ mats.find(mat => mat.name === player.mat)?.imgPath }` }
                                alt={ player.mat }
                            />
                        </div>
                    </div>
                </CardContent>
            </Collapse>
        </Card>
    );
};


export default PlayerCard;
