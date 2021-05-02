import { Grid, Link } from '@material-ui/core';
import GitHubIcon from '@material-ui/icons/GitHub';
import React, { FunctionComponent } from 'react';
import MainLayout from '../components/MainLayout';

interface OwnProps {
}

type Props = OwnProps;

const Settings: FunctionComponent<Props> = (props) => {
  return (
    <MainLayout>
      <Grid container>
        <Grid item>
          <Link rel="noopener" href="https://github.com/justbenya/scythe-app">
            <GitHubIcon fontSize={ 'large' } style={ { color: '#fff' } } />
          </Link>
        </Grid>

      </Grid>

    </MainLayout>
  );
};

export default Settings;
