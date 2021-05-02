import { combineReducers } from '@reduxjs/toolkit';
import names from '../features/names/namesSlice';
import players from '../features/players/playersSlice';

const rootReducer = combineReducers({
  players,
  names,
});

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer;
