/* eslint-disable no-console */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CitiesEnum } from '../../types/cities.enum';
import { Offer } from '../../types/offer';
import { SortByEnum } from '../../types/sort-by.enum';
import { fetchOffersDataThunk } from './application.thunk';

export interface ApplicationState{
  selectedCity: CitiesEnum;
  offers: Offer[];
  sortBy: SortByEnum;
  isSortFormOpened: boolean;
  isDataLoading: boolean;
  hoveredPlaceCardId: number | null;
}

const initialState: ApplicationState = {
  selectedCity: CitiesEnum.DUSSELDORF,
  offers: [],
  sortBy: SortByEnum.POPULAR,
  isSortFormOpened: false,
  isDataLoading: false,
  hoveredPlaceCardId: null
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
    setHoveredPlaceCardId: (state, action: PayloadAction<number | null>) => {
      state.hoveredPlaceCardId = action.payload;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchOffersDataThunk.pending, () => { console.log('pending...'); })
      .addCase(fetchOffersDataThunk.fulfilled, (state, action: PayloadAction<Offer[]>) => { state.offers = action.payload; });
  }
});

export const { setActualCity, setSortByValue, setIsSortFormOpened, setHoveredPlaceCardId } = applicationSlice.actions;

export const applicationReducer = applicationSlice.reducer;
