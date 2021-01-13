import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import React from 'react';

const tileData = [
    {
        img: `${ process.env.PUBLIC_URL }/assets/mats/argicultural5-1.png`,
        title: 'Image',
        author: 'author',
    }, {
        img: `${ process.env.PUBLIC_URL }/assets/mats/argicultural5-2.png`,
        title: 'Image',
        author: 'author',
    }, {
        img: `${ process.env.PUBLIC_URL }/assets/mats/argicultural5-3.png`,
        title: 'Image',
        author: 'author',
    }, {
        img: `${ process.env.PUBLIC_URL }/assets/mats/argicultural5-4.png`,
        title: 'Image',
        author: 'author',
    },
];


const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-around',
            overflow: 'hidden',
            backgroundColor: theme.palette.background.paper,
            maxWidth: 260,
            maxHeight: 500
        },
        gridList: {

            flexWrap: 'nowrap',
            // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
            transform: 'translateZ(0)',
        },
        title: {
            color: theme.palette.primary.light,
        },
        titleBar: {
            background:
                'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
        },
    }),
);

export default function SingleLineGridList() {
    const classes = useStyles();

    return (
        <div className={ classes.root }>
            <GridList cellHeight={500} className={ classes.gridList } cols={ 1 } spacing={1}>
                { tileData.map((tile) => (
                    <GridListTile key={ tile.img }>
                        <img src={ tile.img } alt={ tile.title } />
                        <GridListTileBar
                            title={ tile.title }
                            classes={ {
                                root: classes.titleBar,
                                title: classes.title,
                            } }
                            actionIcon={
                                <IconButton aria-label={ `star ${ tile.title }` }>
                                    <StarBorderIcon className={ classes.title } />
                                </IconButton>
                            }
                        />
                    </GridListTile>
                )) }
            </GridList>
        </div>
    );
}
