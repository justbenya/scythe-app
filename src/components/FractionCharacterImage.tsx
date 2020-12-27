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
    characterPath?: string
};

const FractionCharacterImage: React.FC<Props> = (props) => {
    const { name = '', characterPath = '' } = props;
    const classes = useStyles();

    return (
        <CardMedia
            component="img"
            height="140"
            className={ classes.media }
            image={ characterPath }
            alt={ name }
            title={ name }
        />
    );
};

export default FractionCharacterImage;
