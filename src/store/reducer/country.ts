import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ICountry, ICountryName, IInitialState, IRequestCountriesSuccessful } from '../interfaces/index'

const initialState: IInitialState = {
  loader: true,
  countries: [],
  error: '',
  countryName: ''
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
    onChangeConuntryInput(state: IInitialState, action: PayloadAction<ICountryName>) {
      state.countryName = action.payload.countryName
    }
  }
});

export const { 
  requestCountries,
  requestCountriesSuccessful,
  requestCountriesFailed
} = countriesSlise.actions;

export const { reducer } = countriesSlise;

export type State = ReturnType<typeof reducer>;
