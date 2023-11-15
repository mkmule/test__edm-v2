import React from 'react';
import './EmployeeTable.scss';
import { Employee } from '../../interfaces/employee';

interface Props {
  handleColumnClick: (columnName: string) => void;
  data: Employee[];
}

const EmployeeRow = (item: Employee) => (
  <tr key={item.contact}>
    <td>{item.company}</td>
    <td>{item.contact}</td>
    <td>{item.country}</td>
  </tr>
);

export const EmployeeTable = ({ data, handleColumnClick }: Props) => {

  const handleThClick = (event: React.MouseEvent<HTMLElement>) => {
    handleColumnClick((event.target as HTMLElement).getAttribute('data-name') as string);
  }

  return (
    <table className="employee-table">
      <thead>
      <tr>
        <th data-name="company" onClick={handleThClick}>Company</th>
        <th data-name="contact" onClick={handleThClick}>Contact</th>
        <th data-name="country" onClick={handleThClick}>Country</th>
      </tr>
      </thead>
      <tbody>
      {data.length ? (data.map(EmployeeRow)) : (
        <tr>
          <td colSpan={3}>No data</td>
        </tr>
      )}
      </tbody>
    </table>
  );
}