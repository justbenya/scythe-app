import { Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import mapKeys from 'lodash-es/mapKeys';
import React, { FunctionComponent } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { RootState } from '../app/rootReducer';
import { deletePlayers, editPlayer } from '../features/players/playersSlice';
import { PlayersType } from '../features/players/types';
import Main from '../layouts/Main';

const useStyles = makeStyles({
    table: {
        minWidth: 320,
    },
});

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
        <Main>
            <TableContainer component={ Paper }>
                <Table className={ classes.table } size="medium">
                    <TableHead>
                        <TableRow>
                            <TableCell>Место</TableCell>
                            <TableCell>Фракция</TableCell>
                            <TableCell align="right">Популярность</TableCell>
                            <TableCell align="right">Звезд</TableCell>
                            <TableCell align="right">Территорий</TableCell>
                            <TableCell align="right">Ресурсов</TableCell>
                            <TableCell align="right">Бонусов зданий</TableCell>
                            <TableCell align="right">Монет</TableCell>
                            <TableCell align="right">Всего</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        { Object.values(converted).map((player) => (
                            <TableRow key={ player.name }>
                                <TableCell align="center">{ player.gameEndPosition }</TableCell>
                                <TableCell component="th" scope="player">
                                    { player.name }
                                    <br />
                                    { player.faction }
                                    <br />
                                    { player.mat }
                                </TableCell>
                                <TableCell align="right">{ player.popularity }</TableCell>
                                <TableCell align="right">{ player.stars }</TableCell>
                                <TableCell align="right">{ player.territories }</TableCell>
                                <TableCell align="right">{ player.resources }</TableCell>
                                <TableCell align="right">{ player.buildingBonuses }</TableCell>
                                <TableCell align="right">{ player.gold }</TableCell>
                                <TableCell align="right">{ player.points }</TableCell>
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
        </Main>
    );
};

export default connect(
    (state: RootState) => ({
        players: state.players,
    }),
    { deletePlayers, editPlayer },
)(Result);
