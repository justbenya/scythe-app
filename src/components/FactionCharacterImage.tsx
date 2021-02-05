import { CardMedia } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';

const useStyles = makeStyles({
    media: {
        objectPosition: '50% 25%',
        height: '25vh',
        minHeight: 140
    },
});

type Props = {
    name?: string,
    characterPath?: string
};

const FactionCharacterImage: React.FC<Props> = (props) => {
    const { name = '', characterPath = '' } = props;
    const classes = useStyles();

    return (
        <CardMedia
            component="img"
            className={ classes.media }
            image={ characterPath }
            alt={ name }
            title={ name }
        />
    );
};

export default FactionCharacterImage;
