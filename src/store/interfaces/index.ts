export interface ResponseData {
  Countries: ICountry[]
};

export interface ICountry {
  Country: string,
  ID: string,
  TotalConfirmed: number,
  TotalDeaths: number,
  TotalRecovered: number
};

export interface IInitialState {
  loader: boolean,
  countries: ICountry[],
  error: string,
  countryName: string,
  selectedCountry?: ICountry
};

export interface IRequestCountriesSuccessful {
  countries: ICountry[];
};
