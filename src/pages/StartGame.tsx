import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import React, { FunctionComponent } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { foundEngNameFractionToUrl, mats } from '../common/scytheLogic';
import AppMenuFractions from '../components/AppMenuFractions';
import { addPlayer, deletePlayers } from '../features/players/playersSlice';
import { IPlayer } from '../features/players/types';
import Main from '../layouts/Main';
import { routes } from '../routes';
import { RootState } from '../store/rootReducer';

type Props = {
    players: IPlayer[];
    addPlayer: any;
    deletePlayers: typeof deletePlayers;
}

const StartGame: FunctionComponent<Props> = (props) => {
    const { players, deletePlayers, addPlayer } = props;

    const history = useHistory();

    const handleCalculateScore = (): void => {
        for (const mat of mats) {
            const playerFirstTurn = players.find(player => player.mat === mat);
            if (playerFirstTurn) {
                history.push(`/score/${ foundEngNameFractionToUrl(playerFirstTurn.fraction) }`);
                break;
            }
        }
    };

    const handleNewGame = () => {
        deletePlayers();
        setTimeout(() => {history.push(routes['index'].path);}, 100);
    };

    return (
        <>
            <AppMenuFractions />

            <Main>
                <Grid container direction="column" spacing={ 4 } justify={ 'center' }>
                    <Grid item>
                        <Button
                            variant="contained" color="primary" fullWidth
                            onClick={ addPlayer }
                        >
                            Добавить игрока
                        </Button>
                    </Grid>

                    <Grid item>
                        <Button
                            variant="contained" color="default" fullWidth
                            onClick={ () => console.log('2') }
                        >
                            Перевыбрать игрока
                        </Button>
                    </Grid>

                    <Grid item>
                        <Button
                            variant="contained" color="primary" fullWidth
                            onClick={ handleNewGame }
                        >
                            Новая игра
                        </Button>
                    </Grid>
                </Grid>
            </Main>
        </>
    );
};

export default connect(
    (state: RootState) => ({
        players: Object.values(state.players),
    }),
    { addPlayer, deletePlayers },
)(StartGame);
