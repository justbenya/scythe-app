import { Typography } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import React, { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';
import Main from '../layouts/Main';
import { routes } from '../routes';

const NotFound: FunctionComponent = () => {
    return (
        <Main>
            <Typography variant={ 'h1' } align={ 'center' }>404?!</Typography>
            <Button component={ Link } to={ routes.index.path } variant="outlined" color="primary" fullWidth>
                Вернуться на главную
            </Button>
        </Main>
    );
};

export default NotFound;
