import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import React, { FC } from 'react';
// @ts-ignore
import useOrientationChange from 'use-orientation-change';
import { AppMenuNavigation } from './AppMenuNavigation';

const useStyles = makeStyles({
  fixed: {
    '@media (min-width: 600px)': {
      maxWidth: '100%',
    },
    '@media (min-width: 960px)': {
      maxWidth: 960,
    },
    '@media (min-width: 1280px)': {
      maxWidth: 1280,
    },
  },
  main: {
    height: '100%',
    padding: '20px 0 50px 0',
  },
});

type Props = {
  [name: string]: any;
}

const MainLayout: FC<Props> = (props) => {
  const { className } = props;
  const classes = useStyles();
  const orientation = useOrientationChange();

  return (
    <>
      <Container fixed className={ classes.fixed }>
        <main className={ clsx(classes.main, className) }>{ props.children }</main>
      </Container>

      { orientation === 'landscape' ? null : <AppMenuNavigation /> }
    </>
  );
};

export default MainLayout;
