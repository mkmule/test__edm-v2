import { useEffect, useState } from 'react';
import { getEmployees } from '../../services/employee.service';
import { Employee } from '../../interfaces/employee';
import { EmployeeTable } from '../../components/EmployeeTable/EmployeeTable';

export const Dashboard = () => {
  const [employees, setEmployees] = useState<Employee[]>([]);
  // const [query, setQuery] = useState();
  const [filterColumn, setFilterColumn] = useState('');
  const [filterColumnAsc, setFilterColumnAsc] = useState(true);

  useEffect(() => {
    // Initial data fetch
    getEmployees()
      .then(({ data }) => {
        setEmployees(data);
      })
      .catch(() => {
        // TODO: Error handling implementation here
      });
  }, []);

  useEffect(() => {
    // Simulate front-end filtering, however if data is huge we would definitely shift it to back-end
    employees.sort((a: Employee, b: Employee) => {
      const aProperty = a[filterColumn];
      const bProperty = b[filterColumn];

      if (aProperty === bProperty) return 0;
      return aProperty > bProperty ? 1 : -1;
    });

    setEmployees([...employees]);
  }, [filterColumn]);

  useEffect(() => {
    setEmployees([...employees.reverse()]);
  }, [filterColumnAsc]);

  const handleColumnClick = (columnName: string) => {
    if (filterColumn === columnName) {
      setFilterColumnAsc(!filterColumnAsc); // Invert order
      return;
    }

    setFilterColumn(columnName);
  }

  return (
    <div className="dashboard">
      <EmployeeTable data={employees} handleColumnClick={handleColumnClick} />
    </div>
  );
}