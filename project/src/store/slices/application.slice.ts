/* eslint-disable no-console */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { offersMockData } from '../../mock-data/offers/offers';
import { CitiesEnum } from '../../types/cities.enum';
import { Offer } from '../../types/offer';
import { SortByEnum } from '../../types/sort-by.enum';

export interface ApplicationState{
  selectedCity: CitiesEnum;
  offers: Offer[];
  sortBy: SortByEnum;
}

const initialState: ApplicationState = {
  selectedCity: CitiesEnum.AMSTERDAM,
  offers: offersMockData,
  sortBy: SortByEnum.POPULAR,
};

export const applicationSlice = createSlice({
  name: 'application',
  initialState,
  reducers: {
    setActualCity: (state, action: PayloadAction<CitiesEnum>) => {
      state.selectedCity = action.payload;
    },

    setSortByValue: (state, action: PayloadAction<SortByEnum>) => {
      state.sortBy = action.payload;
    },
  }
});

export const { setActualCity, setSortByValue } = applicationSlice.actions;

export const applicationReducer = applicationSlice.reducer;
