import { CitiesEnum } from '../../types/cities.enum';
import { SortByEnum } from '../../types/sort-by.enum';
import { applicationSlice, initialState, setActualCity, setSortByValue } from './application.slice';

describe('Reducer: application', () => {
  it('without additional parameters should return initial state', () => {
    expect(applicationSlice.reducer(undefined, {type: 'UNKNOWN_ACTION'}))
      .toEqual(initialState);
  });

  it('should correctly change selected city', () => {
    expect(applicationSlice.reducer(initialState, setActualCity(CitiesEnum.HAMBURG)))
      .toEqual({...initialState, selectedCity: CitiesEnum.HAMBURG});
  });

  it('should correctly change sort by value', () => {
    expect(applicationSlice.reducer(initialState, setSortByValue(SortByEnum.PRICE_HIGH_TO_LOW)))
      .toEqual({...initialState, sortBy: SortByEnum.PRICE_HIGH_TO_LOW});
  });
});
