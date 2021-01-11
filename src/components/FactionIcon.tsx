import React from 'react';

type Props = {
    name: string;
    iconPath?: string;
}

const FactionIcon: React.FunctionComponent<Props> = (props) => {
    const { name, iconPath } = props;

    if (!iconPath) return null;

    return (
        <img height={ 35 } src={ iconPath } alt={ name } />
    );
};

export default FactionIcon;
