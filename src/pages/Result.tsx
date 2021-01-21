import { Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import mapKeys from 'lodash-es/mapKeys';
import React, { FunctionComponent } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { RootState } from '../app/rootReducer';
import { getShortNameFaction, resources } from '../common/scytheLogic';
import MainLayout from '../components/MainLayout';
import { deletePlayers, editPlayer } from '../features/players/playersSlice';
import { PlayersType } from '../features/players/types';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            borderCollapse: 'separate',
            minWidth: 320,
        },
        sticky: {
            position: 'sticky',
            background: theme.palette.background.paper,
            left: 0,
            zIndex: 1,
        },
        resourceIcon: {
            verticalAlign: 'middle',
        },
    }),
);

type Props = {
    players: PlayersType;
    editPlayer: typeof editPlayer;
    deletePlayers: typeof deletePlayers;
}

const Result: FunctionComponent<Props> = (props) => {
    const history = useHistory();
    const classes = useStyles();

    const {
        players,
        deletePlayers,
        editPlayer,
    } = props;

    const sortedPlayers = [...Object.values(players)].sort((a, b) => b.points - a.points);
    const playersByWinningPosition = sortedPlayers.map((player, index) => ({ ...player, gameEndPosition: index + 1 }));
    const converted = { ...mapKeys(playersByWinningPosition, 'id') };

    const handleNewGame = () => {
        // TODO добавить сохранение места
        const sortedPlayers = [...Object.values(players)].sort((a, b) => b.points - a.points);
        sortedPlayers.forEach((player, index) => editPlayer({ ...player, gameEndPosition: index + 1 }));

        deletePlayers();
        setTimeout(() => {history.push('/');}, 100);
    };

    return (
        <MainLayout className={ 'result-page' }>
            <TableContainer component={ Paper }>
                <Table className={ classes.root } size="small">
                    <TableHead>
                        <TableRow>
                            <TableCell align="center" size={ 'small' }>№</TableCell>
                            <TableCell className={ classes.sticky }>Игрок</TableCell>
                            {
                                resources.map(resource => (
                                    <TableCell align="center" key={ resource.name }>
                                        <img className={ classes.resourceIcon } width={ 30 } height={ 30 } src={ resource.imgPath } alt={ resource.name } />
                                    </TableCell>
                                ))
                            }
                            <TableCell align="center">Всего</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        { Object.values(converted).map((player) => (
                            <TableRow key={ player.name }>
                                <TableCell align="center">{ player.gameEndPosition }</TableCell>
                                <TableCell className={ classes.sticky } component="th" scope="player" size={ 'small' }>
                                    { player.name }
                                    <br />
                                    { getShortNameFaction(player.faction) }
                                    <br />
                                    { player.mat }
                                </TableCell>
                                <TableCell size={ 'small' } align="center">{ player.popularity }</TableCell>
                                <TableCell size={ 'small' } align="center">{ player.stars }</TableCell>
                                <TableCell size={ 'small' } align="center">{ player.territories }</TableCell>
                                <TableCell size={ 'small' } align="center">{ player.resources }</TableCell>
                                <TableCell size={ 'small' } align="center">{ player.buildingBonuses }</TableCell>
                                <TableCell size={ 'small' } align="center">{ player.gold }</TableCell>
                                <TableCell size={ 'small' } align="center">{ player.points }</TableCell>
                            </TableRow>
                        )) }
                    </TableBody>
                </Table>
            </TableContainer>
            <br />
            <Button
                variant="contained" color="secondary"
                onClick={ handleNewGame }
            >
                Новая игра
            </Button>
        </MainLayout>
    );
};

export default connect(
    (state: RootState) => ({
        players: state.players,
    }),
    { deletePlayers, editPlayer },
)(Result);
