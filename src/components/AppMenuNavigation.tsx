import { BottomNavigation, BottomNavigationAction } from '@material-ui/core';
import React, { FunctionComponent } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { routes } from '../routes';

const AppMenuNavigation: FunctionComponent = () => {
    const history = useHistory();
    const [value, setValue] = React.useState(history.location.pathname);

    const handleChange = (newValue: any) => {
        setValue(newValue)
    }

    return (
        <BottomNavigation
            className="menu-footer" value={ value } showLabels
            onChange={ handleChange }
        >
            { Object.values(routes).map(route => (
                <BottomNavigationAction
                    key={ route.path }
                    component={ Link }
                    label={ route.title }
                    value={ route.path + value }
                    to={ route.path }
                />
            )) }
        </BottomNavigation>
    );
};

export default AppMenuNavigation;
