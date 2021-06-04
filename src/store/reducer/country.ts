import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IInitialState, IRequestCountriesSuccessful } from '../interfaces/index'

const initialState: IInitialState = {
  loader: false,
  countries: [],
  error: ''
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
    }
  }
});

export const { 
  requestCountries,
  requestCountriesSuccessful,
  requestCountriesFailed
} = countriesSlise.actions;

export const { reducer } = countriesSlise;