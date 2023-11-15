import React from 'react';
import './EmployeeTable.scss';
import { Employee } from '../../interfaces/employee';

interface PropsEmployeeRow {
  item: Employee;
  handleDeleteClick?: (item: Employee) => void;
}

const EmployeeRow = ({ item, handleDeleteClick }: PropsEmployeeRow) => (
  <tr>
    <td>{item.company} {handleDeleteClick && <button onClick={() => handleDeleteClick(item)}>Delete</button>}
    </td>
    <td>{item.contact}</td>
    <td>{item.country}</td>
  </tr>
);

interface Props {
  handleDeleteClick?: (item: Employee) => void;
  handleColumnClick: (columnName: string) => void;
  data: Employee[];
}

export const EmployeeTable = ({ handleDeleteClick, data, handleColumnClick }: Props) => {

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
      {data.length ? (data.map(item => <EmployeeRow key={item.uid} item={item} handleDeleteClick={handleDeleteClick} />)) : (
        <tr>
          <td colSpan={3}>No data</td>
        </tr>
      )}
      </tbody>
    </table>
  );
}