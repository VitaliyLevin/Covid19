import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ICountry, IInitialState, IRequestCountriesSuccessful, SortingPayload } from '../interfaces/index';

const initialState: IInitialState = {
  loader: true,
  countries: [],
  error: '',
  countryName: '',
  selectedCountry: undefined
}

export const countriesSlise = createSlice({
  name: 'countries',
  initialState: initialState,
  reducers: {
    requestCountries(state: IInitialState) {
      state.loader = true;
    },
    requestCountriesSuccessful(state: IInitialState, action: PayloadAction<IRequestCountriesSuccessful>) {
      state.loader = false;
      state.countries = action.payload.countries;
      state.error = '';
    },
    requestCountriesFailed(state: IInitialState) {
      state.error = 'Something went wrong';
    },
    onChangeConuntryInput(state: IInitialState, action: PayloadAction<string>) {
      state.countryName = action.payload;
    },
    selectCountry(state: IInitialState, action: PayloadAction<string>) {
      state.selectedCountry = state.countries.find(item => item.Country === action.payload)
    },
    clearSelectedCountry(state: IInitialState) {
      state.selectedCountry = undefined;
    },
    sortingCountry(state: IInitialState, action: PayloadAction<SortingPayload>) {
      const arr = [...state.countries];
      if (action.payload.sorting === 'asc') {
        arr.sort((a: ICountry, b: ICountry) => a[action.payload.nameCell] > b[action.payload.nameCell] ? 1 : -1)
      } else {
        arr.sort((a: ICountry, b: ICountry) => b[action.payload.nameCell] > a[action.payload.nameCell] ? 1 : -1);
      }
      state.countries = arr;
    },
  }
});

export const {
  requestCountries,
  requestCountriesSuccessful,
  requestCountriesFailed,
  onChangeConuntryInput,
  selectCountry,
  clearSelectedCountry,
  sortingCountry
} = countriesSlise.actions;

export const { reducer } = countriesSlise;

export type State = ReturnType<typeof reducer>;
