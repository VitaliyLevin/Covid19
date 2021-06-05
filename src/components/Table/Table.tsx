import React from 'react'
import { useSelector } from 'react-redux';
import TableRow from '../../pages/TableRow';
import { State } from '../../store/reducer/country';
import { RowInfo, StyledTable } from './styled';

const Table = (): JSX.Element => {
  const { countries, loader } = useSelector((state: State) => state);

  const countriesFilter = () => {
    const countriesArray = countries.filter((item) => {
      return item.Country.toLowerCase().startsWith("al")
    });
    if (!countriesArray.length) {
        return <RowInfo><td colSpan={3}>Not found</td></RowInfo>
    } else {
      return countriesArray.map(item => {
        return <TableRow key={item.ID} />
      });
    }
  };

  return (
    <>
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
          {!loader && countriesFilter()}
        </tbody>
      </StyledTable>
    </>
  )
};

export default Table;
