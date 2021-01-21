import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import { TransitionProps } from '@material-ui/core/transitions';
import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteAllPlayers } from '../features/players/playersSlice';

const Transition = React.forwardRef(function Transition(
    props: TransitionProps & { children?: React.ReactElement<any, any> },
    ref: React.Ref<unknown>,
) {
    return <Slide direction="up" ref={ ref } { ...props } />;
});

export const ButtonNewGame = () => {
    const [open, setOpen] = React.useState(false);
    const dispatch = useDispatch();

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleCreateNewGame = () => {
        dispatch(deleteAllPlayers());
    };

    return (
        <div>
            <Button
                variant="contained"
                color="primary"
                fullWidth
                onClick={ handleClickOpen }
            >
                Новая игра
            </Button>

            <Dialog
                open={ open }
                TransitionComponent={ Transition }
                keepMounted
                onClose={ handleClose }
                aria-labelledby="alert-dialog-slide-title"
                aria-describedby="alert-dialog-slide-description"
            >
                <DialogTitle id="alert-dialog-slide-title">{ 'Создать новую игру?' }</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-slide-description">
                        Все данные в текущей игре будут удалены.
                        <br />
                        Отменить это действие будет невозможно.
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={ handleClose } color="primary">
                        Отмена
                    </Button>
                    <Button onClick={ handleCreateNewGame } color="secondary">
                        Создать
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
};
