import { FormControlLabel, Grid, Link } from '@material-ui/core';
import Switch from '@material-ui/core/Switch';
import GitHubIcon from '@material-ui/icons/GitHub';
import React, { FunctionComponent } from 'react';
import MainLayout from '../components/MainLayout';

interface OwnProps {
}

type Props = OwnProps;

const Settings: FunctionComponent<Props> = (props) => {
  const handleChange = () => {}

  return (
    <MainLayout>
      <Grid container direction="column">
        <Grid item>
            <FormControlLabel
              control={<Switch checked={false} onChange={handleChange} name="checkedA" />}
              label="Включить захватчики из далеких земель"
            />
        </Grid>

        <Grid item>
          <Link rel="noopener" href="https://github.com/justbenya/scythe-app">
            Создано JustBenya — <GitHubIcon fontSize={ 'large' } style={ { color: '#fff' } } />
          </Link>
        </Grid>

      </Grid>

    </MainLayout>
  );
};

export default Settings;
