import { combineReducers } from '@reduxjs/toolkit';
import players from '../features/players/playersSlice';

const rootReducer = combineReducers({
    players
});

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer;
