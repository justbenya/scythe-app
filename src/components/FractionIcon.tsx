import React from 'react';

type Props = {
    name: string;
    iconPath: string;
}

const FractionIcon: React.FunctionComponent<Props> = (props) => {
    const { name, iconPath } = props;
    return (
        <img height={ 35 } src={ iconPath } alt={ name } />
    );
};

export default FractionIcon;
