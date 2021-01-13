import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FileCopyIcon from '@material-ui/icons/FileCopyOutlined';
import PrintIcon from '@material-ui/icons/Print';
import SaveIcon from '@material-ui/icons/Save';
import ShareIcon from '@material-ui/icons/Share';
import SpeedDial from '@material-ui/lab/SpeedDial';
import SpeedDialAction from '@material-ui/lab/SpeedDialAction';
import SpeedDialIcon from '@material-ui/lab/SpeedDialIcon';
import React from 'react';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            transform: 'translateZ(0px)',
            flexGrow: 1,
        },
        exampleWrapper: {
            position: 'relative',
            marginTop: theme.spacing(3),
            height: 60,
        },
        speedDial: {
            position: 'absolute',
            '&.MuiSpeedDial-directionUp, &.MuiSpeedDial-directionLeft': {
                bottom: theme.spacing(2),
                right: theme.spacing(2),
            },
            '&.MuiSpeedDial-directionDown, &.MuiSpeedDial-directionRight': {
                top: theme.spacing(2),
                left: theme.spacing(2),
            },
        },
    }),
);

const actions = [
    { icon: <FileCopyIcon />, name: 'Добавить игрока' },
    { icon: <SaveIcon />, name: 'Удалить игрока' },
    { icon: <PrintIcon />, name: 'Новая игра' },
    { icon: <ShareIcon />, name: 'Share' },
    { icon: <FavoriteIcon />, name: 'Like' },
];

export default function SpeedDials() {
    const classes = useStyles();

    const [open, setOpen] = React.useState(false);
    const [hidden, setHidden] = React.useState(false);

    const handleClose = () => {
        setOpen(false);
    };

    const handleOpen = () => {
        setOpen(true);
    };

    return (
        <div className={ classes.root }>
            <div className={ classes.exampleWrapper }>
                <SpeedDial
                    ariaLabel="SpeedDial example"
                    className={ classes.speedDial }
                    hidden={ hidden }
                    open={open}
                    icon={ <SpeedDialIcon /> }
                    onClose={ handleClose }
                    onOpen={ handleOpen }
                    direction={ 'up' }
                >
                    { actions.map((action) => (
                        <SpeedDialAction
                            key={ action.name }
                            icon={ action.icon }
                            tooltipTitle={ action.name }
                            tooltipOpen
                            onClick={ handleClose }
                        />
                    )) }
                </SpeedDial>
            </div>
        </div>
    );
}
