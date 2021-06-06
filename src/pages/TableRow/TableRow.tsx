import React from 'react';

type PropsType = {
  number: number;
  name: string;
  total: number;
  onClickCountryRow: () => void;
}

const TableRow = ({ number, name, total, onClickCountryRow }: PropsType): JSX.Element => {
  return (
    <tr onClick={onClickCountryRow}> 
      <td>{number}</td>
      <td>{name}</td>
      <td>{total}</td>
    </tr>
  )
};

export default TableRow;
