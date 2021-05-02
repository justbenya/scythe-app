import { Typography } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import React, { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';
import MainLayout from '../components/MainLayout';

const NotFound: FunctionComponent = () => {
  return (
    <MainLayout>
      <Typography variant={ 'h1' } align={ 'center' }>404?!</Typography>
      <Button component={ Link } to={ '/' } variant="outlined" color="primary" fullWidth>
        Вернуться на главную
      </Button>
    </MainLayout>
  );
};

export default NotFound;
