import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import React, { FunctionComponent, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import PlayerRow, { IPlayer } from '../components/PlayerRow';
import { fractions, mats, TOTAL_PLAYERS } from '../ScytheLogic';

function shuffle(array: any): Array<any> {
    const result = [...array];
    for (let i = result.length - 1; i > 0; i--) {
        let randIndex = Math.floor(Math.random() * (i + 1));
        let temp = result[i];
        result[i] = result[randIndex];
        result[randIndex] = temp;
    }
    return result;
}

const pullFractions = shuffle(fractions);
const pullMats = shuffle(mats);

const Step1: FunctionComponent = () => {
    const { register, handleSubmit, errors } = useForm();
    const history = useHistory();

    // todo 1
    const onSubmit = (data: any) => {
        history.push('/step2');
    };


    const [players, setPlayers] = useState<Array<IPlayer>>([]);


    const handleAddPlayer = () => {
        if (players.length >= TOTAL_PLAYERS) return;

        const randomIndex = Math.floor(Math.random() * pullFractions.length);

        let fraction = pullFractions.splice(randomIndex, 1)[0].label;
        let mat = pullMats.splice(randomIndex, 1)[0].label;

        setPlayers([...players, {
            name: 'Player ' + (players.length + 1),
            fraction,
            mat,
        }]);

    };

    const handleChangeFraction = (event: React.ChangeEvent<HTMLInputElement>, index: number) => {
        const changesPlayers = players.map((item, i) => {
            if (i === index) {
                return { ...item, fraction: event.target.value };
            }
            return item;
        });

        setPlayers(changesPlayers);
    };

    const handleChangeMat = (event: React.ChangeEvent<HTMLInputElement>, index: number) => {
        const changesPlayers = players.map((item, i) => {
            if (i === index) {
                return { ...item, mat: event.target.value };
            }
            return item;
        });

        setPlayers(changesPlayers);
    };

    const handleDeletePlayer = (index: number) => {
        pullMats.push({ label: players[index].mat });
        pullFractions.push({ label: players[index].fraction });
        setPlayers((prevPlayers) => prevPlayers.filter((_, i) => i !== index));
    };

    return (
        <Container fixed>
            <main style={ { height: '90vh', paddingTop: 30 } }>
                <Grid container direction="column" spacing={ 1 } style={ { height: '100%' } }>

                    <Grid item>
                        <Button variant="contained" color="primary" fullWidth onClick={ handleAddPlayer }>
                            Добавить игрока
                        </Button>
                    </Grid>

                    <Grid item>
                        <form autoComplete="off">
                            <Grid container direction="column" spacing={ 1 } style={ { height: '100%' } }>
                                { players.map((player, index) =>
                                    <PlayerRow
                                        key={ player.name + index } { ...player } index={ index }
                                        handleChangeFraction={ handleChangeFraction }
                                        handleChangeMat={ handleChangeMat }
                                        handleDeletePlayer={ handleDeletePlayer }
                                    />) }

                                <Grid item style={ { marginTop: 'auto' } }>
                                    <Button
                                        onClick={ () => { history.push('/score'); } }
                                        variant="contained" color="secondary" fullWidth
                                    >Подсчет очков</Button>
                                </Grid>
                            </Grid>
                        </form>

                    </Grid>


                </Grid>

            </main>
        </Container>

    );
};

export default Step1;

