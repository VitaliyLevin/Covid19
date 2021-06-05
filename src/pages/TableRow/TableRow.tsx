import React from 'react';

type PropsType = {
  number: number;
  name: string;
  total: number;
}

const TableRow = ({ number, name, total }: PropsType): JSX.Element => {
  return (
    <tr>
      <td>{number}</td>
      <td>{name}</td>
      <td>{total}</td>
    </tr>
  )
};

export default TableRow;
