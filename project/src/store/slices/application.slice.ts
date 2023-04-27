/* eslint-disable no-console */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CitiesEnum } from '../../types/cities.enum';
import { Offer } from '../../types/offer';
import { SortByEnum } from '../../types/sort-by.enum';
import { fetchOffersDataAction } from './application.actions';

export interface ApplicationState{
  selectedCity: CitiesEnum;
  offers: Offer[];
  sortBy: SortByEnum;
  isSortFormOpened: boolean;
  isDataLoading: boolean;
}

const initialState: ApplicationState = {
  selectedCity: CitiesEnum.DUSSELDORF,
  offers: [],
  sortBy: SortByEnum.POPULAR,
  isSortFormOpened: false,
  isDataLoading: false
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

    setIsSortFormOpened: (state, action: PayloadAction<boolean>) => {
      state.isSortFormOpened = action.payload;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchOffersDataAction.pending, () => { console.log('pending...'); })
      .addCase(fetchOffersDataAction.fulfilled, (state, action: PayloadAction<Offer[]>) => { state.offers = action.payload; });
  }
});

export const { setActualCity, setSortByValue, setIsSortFormOpened } = applicationSlice.actions;

export const applicationReducer = applicationSlice.reducer;
