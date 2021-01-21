import { Button, Card, CardActions, CardContent, Collapse, IconButton, MenuItem } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import clsx from 'clsx';
import React, { FunctionComponent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { factions, FactionType, mats } from '../../common/scytheLogic';
import FactionCharacterImage from '../../components/FactionCharacterImage';
import FactionIcon from '../../components/FactionIcon';
import { AutocompletePlayerName } from '../names/AutocompletePlayerName';
import { changeFieldInPlayer, deletePlayer } from './playersSlice';
import { getPlayerByFaction } from './selectors';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            minHeight: 370,
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
        matImage: {
            width: '100%',
            height: 'auto',
        },
    }),
);

export const PlayerCard: FunctionComponent = () => {
    const { id: faction } = useParams<{ id: FactionType }>();
    const player = useSelector(getPlayerByFaction(faction));
    const dispatch = useDispatch();

    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);
    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    if (!player?.id) return null;

    const handleChangeFaction = (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        dispatch(changeFieldInPlayer('faction', event.target.value, player.id));
    };

    const handleChangeMat = (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        dispatch(changeFieldInPlayer('mat', event.target.value, player.id));
    };

    const handleDeletePlayer = () => {
        dispatch(deletePlayer(player.id));
    };

    return (
        <Card className={ classes.root }>
            <FactionCharacterImage { ...factions.find(i => i.name === player.faction) } />
            <CardContent>
                <Grid container spacing={ 2 } direction={ 'row' }>
                    <Grid item xs={ 12 } sm={ 6 }>
                        <AutocompletePlayerName />
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
                            onChange={ handleChangeFaction }
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
                            onChange={ handleChangeMat }
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
                    <img
                        className={ classes.matImage }
                        src={ `${ mats.find(mat => mat.name === player.mat)?.imgPath }` }
                        alt={ player.mat }
                    />
                </CardContent>
            </Collapse>
        </Card>
    );
};
