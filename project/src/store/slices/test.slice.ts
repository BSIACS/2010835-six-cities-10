/* eslint-disable no-console */
import { createSlice } from '@reduxjs/toolkit';

export interface TestState{
  counterValue: number;
}

const initialState: TestState = {
  counterValue: 0
};

export const testSlice = createSlice({
  name: 'test',
  initialState,
  reducers: {
    incCounter: (state, action) => {
      state.counterValue += 1;
    },
    decCounter: (state, action) => {
      if(state.counterValue >= 1){
        state.counterValue -= 1;
      }
    },
  }
});

export const { incCounter, decCounter } = testSlice.actions;

export const testReducer = testSlice.reducer;
