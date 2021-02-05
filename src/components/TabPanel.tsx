import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import React, { FC } from 'react';

const useStyles = makeStyles({
    root: {
        height: '100%',
        width: '100%',
        margin: '0 auto',
        '@media (min-width: 600px)': {
            maxWidth: "100%",
        },
        '@media (min-width: 960px)': {
            maxWidth: 960,
        },
        '@media (min-width: 1280px)': {
            maxWidth: 1280,
        },
    },
});

type Props = {
    index: any;
    value: any;
    children?: React.ReactNode;
    dir?: string;
}

export const TabPanel: FC<Props> = (props) => {
    const { children, value, index, ...other } = props;
    const classes = useStyles();

    return (
        <div
            className={ classes.root }
            role="tabpanel"
            hidden={ value !== index }
            id={ `full-width-tabpanel-${ index }` }
            aria-labelledby={ `full-width-tab-${ index }` }
            { ...other }
        >
            { value === index && (
                <Box p={ 2 }>
                    { children }
                </Box>
            ) }
        </div>
    );
};
