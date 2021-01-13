import { Grid, Link } from '@material-ui/core';
import GitHubIcon from '@material-ui/icons/GitHub';
import React, { FunctionComponent } from 'react';
import Main from '../layouts/Main';

interface OwnProps {}

type Props = OwnProps;

const Settings: FunctionComponent<Props> = (props) => {
    return (
        <Main>
            <Grid container>
                <Grid item>
                    <Link rel="noopener" href="https://github.com/justbenya/scythe-app">
                        <GitHubIcon fontSize={ 'large' } style={ { color: '#fff' } } />
                    </Link>
                </Grid>

            </Grid>

        </Main>
    );
};

export default Settings;
