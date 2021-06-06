import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IInitialState, IRequestCountriesSuccessful } from '../interfaces/index'

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
      state.countryName = action.payload
    },
    selectCountry(state: IInitialState, action: PayloadAction<string>) {
      state.selectedCountry = state.countries.find( item => item.Country === action.payload)
    },
    clearSelectedCountry(state: IInitialState) {
      state.selectedCountry = undefined;
    }
  }
});

export const { 
  requestCountries,
  requestCountriesSuccessful,
  requestCountriesFailed,
  onChangeConuntryInput,
  selectCountry,
  clearSelectedCountry
} = countriesSlise.actions;

export const { reducer } = countriesSlise;

export type State = ReturnType<typeof reducer>;
