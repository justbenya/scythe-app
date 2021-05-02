import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface INames {
  name: string;
  inputValue?: string;
}

const initialState: INames[] = [];

const namesSlice = createSlice({
  name: 'names',
  initialState,
  reducers: {
    addName(state, action: PayloadAction<INames>) {
      state.push(action.payload);
    },
    deleteName(state, action: PayloadAction<string>) {
      return state.filter(({ name }) => name !== action.payload);
    },
    changeName(state, action: PayloadAction<string>) {
      return state.map(obj => {

        if (obj.name === action.payload) {
          return { ...obj, name: action.payload };
        }

        return obj;
      });
    },
  },
});

export const {
  addName,
  deleteName,
  changeName,
} = namesSlice.actions;

export default namesSlice.reducer;
