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
import React, { FunctionComponent, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import AppContext from '../context/AppContext';

const useStyles = makeStyles({
    table: {
        minWidth: 320,
    },
});

function createData(name: string, calories: number, fat: number, carbs: number, protein: number) {
    return { name, calories, fat, carbs, protein };
}

const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
];
const Result: FunctionComponent = () => {
    const history = useHistory();
    const classes = useStyles();

    const {
        state: players,
        fetchPlayers,
        clearData
    } = React.useContext(AppContext);

    useEffect(() => {
        fetchPlayers();
    }, [])

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
                                    <TableCell align="center">❤</TableCell>
                                    <TableCell component="th" scope="player">
                                        { player.name }
                                        <br/>
                                        { player.fraction }
                                        <br/>
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
                    onClick={() => {
                        clearData();
                        setTimeout(() => {history.push('/');}, 100)
                    }}
                >
                    Новая игра
                </Button>
            </main>
        </Container>
    );
};

export default Result;
