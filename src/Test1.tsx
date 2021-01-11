import React, { FunctionComponent } from 'react';

interface OwnProps {}

type Props = OwnProps;

const Test1: FunctionComponent<Props> = (props) => {

  return (<div style={{paddingTop: 502}}>Test1</div>);
};

export default Test1;
