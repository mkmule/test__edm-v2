import { useEffect, useState } from 'react';
import { getEmployees } from '../../services/employee.service';
import { Employee } from '../../interfaces/employee';
import { EmployeeTable } from '../../components/EmployeeTable/EmployeeTable';

export const Dashboard = () => {
  const [employees, setEmployees] = useState<Employee[]>([]);
  // const [query, setQuery] = useState();

  useEffect(() => {
    getEmployees()
      .then(({ data }) => {
        console.log(data);
        setEmployees(data);
      })
      .catch(() => {
        // TODO: Error handling implementation here
      });
  }, []);

  const handleColumnClick = (columnName: string) => {
    // Simulate front-end filtering, however if data is huge we would definitely shift it to back-end
    console.log(columnName);
  }

  return (
    <div className="dashboard">
      <EmployeeTable data={employees} handleColumnClick={handleColumnClick} />
    </div>
  );
}