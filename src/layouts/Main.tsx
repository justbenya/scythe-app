import CssBaseline from '@material-ui/core/CssBaseline';
import React, { FunctionComponent } from 'react';
import AppHeader from '../components/AppHeader';

interface OwnProps {}

type Props = OwnProps;

const Main: FunctionComponent<Props> = (props) => {

  return (
      <>
          <CssBaseline />
          <AppHeader/>
      </>
  );
};

export default Main;
