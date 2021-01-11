import { Box, Tab, Tabs } from '@material-ui/core';
import React, { FunctionComponent } from 'react';
import { connect } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import Score from '../../pages/Score';
import { RootState } from '../../store/rootReducer';
import Test1 from '../../Test1';
import Test2 from '../../Test2';
import { PlayersType } from './types';

interface TabPanelProps {
    children?: React.ReactNode;
    index: any;
    value: any;
}

function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={ value !== index }
            id={ `simple-tabpanel-${ index }` }
            aria-labelledby={ `simple-tab-${ index }` }
            { ...other }
        >
            { value === index && (
                <Box p={ 3 }>
                    { children }
                </Box>
            ) }
        </div>
    );
}

type Props = {
    players?: PlayersType;
}


const PlayerList: FunctionComponent<Props> = (props) => {

    const { players } = props;

    const history = useHistory();

    const handleCallToRouter = (value: any) => {
        console.log(value)
        history.push(value);
    }

    return (
        <Tabs
            value={history.location.pathname}
            onChange={handleCallToRouter}
        >
            <Tab label="Item One" component={Link} to="/score" />
            <Tab label="Item Two" component={Link} to="/result" />
        </Tabs>
    )

    // return (
    //     <>
    //         { players && Object.values(players).map((player, index) => (
    //             <TabPanel value={ index } index={ index }>
    //                 {player.faction }
    //             </TabPanel>
    //         )) }
    //     </>
    // );
};

export default connect(
    (state: RootState) => ({
        players: state.players,
    }),
    null,
)(PlayerList);
