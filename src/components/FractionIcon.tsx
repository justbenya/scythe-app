import React from 'react';

const FractionIcon: React.FC<{ name: string, iconPath: string }> = (props) => {
    const { name, iconPath } = props;
    return (
        <img height={ 35 } src={ iconPath } alt={ name } />
    );
};

export default FractionIcon;
