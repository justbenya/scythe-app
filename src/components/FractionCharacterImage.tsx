import { CardMedia } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';

const useStyles = makeStyles({
    media: {
        objectPosition: '50% 25%',
    },
});

type Props = {
    name?: string,
    charactersArtPath?: string
};

const FractionCharacterImage: React.FC<Props> = (props) => {
    const { name = '', charactersArtPath = '' } = props;
    const classes = useStyles();

    return (
        <CardMedia
            component="img"
            height="140"
            className={ classes.media }
            image={ charactersArtPath }
            alt={ name }
            title={ name }
        />
    );
};

export default FractionCharacterImage;
