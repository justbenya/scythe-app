import {
    Button,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Typography,
} from '@material-ui/core';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import mapKeys from 'lodash-es/mapKeys';
import React, { FunctionComponent, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import AppContext from '../context/AppContext';

const useStyles = makeStyles({
    table: {
        minWidth: 320,
    },
});

const Result: FunctionComponent = () => {
    const history = useHistory();
    const classes = useStyles();

    let {
        state: players,
        fetchPlayers,
        clearData,
        editPlayer,
    } = React.useContext(AppContext);

    useEffect(() => {
        fetchPlayers();
    }, []);

    const sortedPlayers = [...Object.values(players)].sort((a, b) => b.points - a.points);
    const result = sortedPlayers.map((player, index) => ({ ...player, gameEndPosition: index + 1 }));

    players = { ...mapKeys(result, 'id') };

    return (
        <Container fixed>
            <main style={ { height: '90vh', paddingTop: 30 } }>
                <Typography variant={ 'h5' }>Итоги по окончанию игры</Typography>

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
                            { Object.values(players).map((player) => (
                                <TableRow key={ player.name }>
                                    <TableCell align="center">{ player.gameEndPosition }</TableCell>
                                    <TableCell component="th" scope="player">
                                        { player.name }
                                        <br />
                                        { player.fraction }
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

                <Button
                    variant="contained" color="secondary"
                    onClick={ () => {
                        // TODO добавить сохранение места
                        const sortedPlayers = [...Object.values(players)].sort((a, b) => b.points - a.points);
                        sortedPlayers.forEach((player, index) => editPlayer({ ...player, gameEndPosition: index + 1 }));

                        clearData();
                        setTimeout(() => {history.push('/');}, 100);
                    } }
                >
                    Новая игра
                </Button>
            </main>
        </Container>
    );
};

export default Result;
