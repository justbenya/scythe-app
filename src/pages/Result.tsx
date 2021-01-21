import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { getShortNameFaction, resources } from '../common/scytheLogic';
import { ButtonNewGame } from '../components/ButtonNewGame';
import MainLayout from '../components/MainLayout';
import { getPlayers } from '../features/players/selectors';

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

const Result: FC = () => {
    const classes = useStyles();
    const players = useSelector(getPlayers);

    const playersByWinningPosition = players
        .sort((a, b) => b.points - a.points)
        .map((player, index) => ({ ...player, gameEndPosition: index + 1 }));

    return (
        <MainLayout>

            <TableContainer component={ Paper }>
                <Table className={ classes.root } size="small">
                    { renderTableHeader() }
                    { renderTableBody() }
                </Table>
            </TableContainer>

            <br />

            <ButtonNewGame />

        </MainLayout>
    );

    function renderTableHeader() {
        return (
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
        );
    }

    function renderTableBody() {
        return (
            <TableBody>
                { playersByWinningPosition.map(({
                    buildingBonuses,
                    faction,
                    gameEndPosition,
                    gold,
                    mat,
                    name,
                    points,
                    popularity,
                    resources,
                    stars,
                    territories,
                    id
                }) => (
                    <TableRow key={ id }>
                        <TableCell align="center">{ gameEndPosition }</TableCell>
                        <TableCell className={ classes.sticky } component="th" scope="player" size={ 'small' }>
                            { name }
                            <br />
                            { getShortNameFaction(faction) }
                            <br />
                            { mat }
                        </TableCell>
                        <TableCell size={ 'small' } align="center">{ popularity }</TableCell>
                        <TableCell size={ 'small' } align="center">{ stars }</TableCell>
                        <TableCell size={ 'small' } align="center">{ territories }</TableCell>
                        <TableCell size={ 'small' } align="center">{ resources }</TableCell>
                        <TableCell size={ 'small' } align="center">{ buildingBonuses }</TableCell>
                        <TableCell size={ 'small' } align="center">{ gold }</TableCell>
                        <TableCell size={ 'small' } align="center">{ points }</TableCell>
                    </TableRow>
                )) }
            </TableBody>
        );
    }
};

export default Result;
