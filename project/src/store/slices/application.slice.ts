/* eslint-disable no-console */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CitiesEnum } from '../../types/cities.enum';

export interface ApplicationState{
  selectedCity: CitiesEnum;
}

const initialState: ApplicationState = {
  selectedCity: CitiesEnum.AMSTERDAM,
};

export const applicationSlice = createSlice({
  name: 'application',
  initialState,
  reducers: {
    setActualCity: (state, action: PayloadAction<CitiesEnum>) => {
      state.selectedCity = action.payload;
    }
  }
});

export const { setActualCity } = applicationSlice.actions;

export const applicationReducer = applicationSlice.reducer;
