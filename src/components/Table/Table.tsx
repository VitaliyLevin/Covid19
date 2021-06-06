import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import TableRow from '../../pages/TableRow';
import { ICountry } from '../../store/interfaces';
import { selectCountry, State } from '../../store/reducer/country';
import { RowInfo, StyledTable } from './styled';

const countriesFilter = (countries: ICountry[], countryName: string): ICountry[] => {
  if (!countryName) {
    return countries
  }
  const filteredCountries = countries.filter((country) => {
    return country.Country.toLowerCase().startsWith(countryName.toLowerCase())
  });
  return filteredCountries;
};

const Table = (): JSX.Element => {
  const { countries, loader, countryName } = useSelector((state: State) => state);
  const dispatch = useDispatch();
  const receivedСountries = countriesFilter(countries, countryName);

  const onClickCountryRow = (name: string) => () => {
    dispatch(selectCountry(name))
  }
  return (
    <StyledTable>
      <thead>
        <tr>
          <th>№</th>
          <th>Country</th>
          <th>Total Confirmed</th>
        </tr>
      </thead>
      <tbody>
        {loader && <RowInfo><td colSpan={3}>Loading...</td></RowInfo>}
        {!loader && (receivedСountries.length
          ? receivedСountries.map((country, i) => (
            <TableRow
              key={country.ID}
              number={i + 1}
              name={country.Country}
              total={country.TotalConfirmed}
              onClickCountryRow={onClickCountryRow(country.Country)}
            />
          ))
          : <RowInfo><td colSpan={3}>Not found</td></RowInfo>
        )}
      </tbody>
    </StyledTable>
  )
};

export default Table;
