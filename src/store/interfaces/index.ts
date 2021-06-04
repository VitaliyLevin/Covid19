export interface ResponseData {
  Countries: ICountry[]
}

export interface ICountry {
  country: string,
  totalConfirmed: number,
  totalDeath: number,
  totalRecovered: number
}

export interface IInitialState {
  loader: boolean,
  countries: ICountry[],
  error: string
}

export interface IRequestCountriesSuccessful {
  countries: ICountry[];
}