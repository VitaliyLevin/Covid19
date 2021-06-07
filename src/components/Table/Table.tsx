import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import TableRow from '../TableRow';
import { ICountry } from '../../store/interfaces';
import { selectCountry, sortingCountry, State } from '../../store/reducer/country';
import { RowInfo, StyledTable } from './styled';

const SORTING_ASC = 'asc';
const SORTING_DESC = 'desc';

const filterableTableHeaders: { [index: string]: string } = {
  'Total Confirmed': 'TotalConfirmed',
  'Country': 'Country'
};

const filterCountries = (countries: ICountry[], countryName: string): ICountry[] => {
  if (!countryName) {
    return countries
  }
  const filteredCountries = countries.filter((country) => {
    return country.Country.toLowerCase().startsWith(countryName.toLowerCase())
  });
  return filteredCountries;
};

const Table = (): JSX.Element => {
  const [CellNameForSorting, setCellNameForSorting] = useState('');
  const [sorting, setSorting] = useState('');
  const { countries, loader, countryName } = useSelector((state: State) => state);
  const dispatch = useDispatch();
  const receivedСountries = filterCountries(countries, countryName);

  const setSortingType = (e: React.SyntheticEvent): void => {
    e.preventDefault()
    const value = e.target as Element;
    const selectedCellName = filterableTableHeaders[value.innerHTML]
    setCellNameForSorting(selectedCellName);
    let isSorting = SORTING_ASC;
    
    if (selectedCellName === CellNameForSorting) {
      isSorting = sorting === SORTING_DESC ? SORTING_ASC : SORTING_DESC;
    }
    setSorting(isSorting);
    dispatch(sortingCountry({ sorting: isSorting, cellNameToSort: selectedCellName }))
  };

  const onClickCountryRow = (name: string) => () => {
    dispatch(selectCountry(name))
  };

  return (
    <StyledTable>
      <thead>
        <tr>
          <th>№</th>
          <th onClick={setSortingType}>Country</th>
          <th onClick={setSortingType}>Total Confirmed</th>
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
