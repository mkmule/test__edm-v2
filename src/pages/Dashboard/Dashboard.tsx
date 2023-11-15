import { useEffect, useState } from 'react';
import { getEmployees } from '../../services/employee.service';
import { Employee } from '../../interfaces/employee';
import { EmployeeTable } from '../../components/EmployeeTable/EmployeeTable';
import TextInput from '../../components/TextInput/TextInput';
import './Dashboard.scss'

const debounceTimeout = 500;
const debounce = <F extends (...args: any[]) => any>(
  callback: F,
  waitFor: number,
) => {
  let timeout: number = 0

  const debounced = (...args: any[]) => {
    clearTimeout(timeout)
    // @ts-ignore
    timeout = setTimeout(() => callback(...args), waitFor)
  }

  return debounced;
}

export const Dashboard = () => {
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [loading, setLoading] = useState(true);
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
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    // Simulate front-end filtering, however if dataset is huge we would definitely shift it to back-end
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

  const getEmployeesByQuery = (value: string) => {
    setLoading(true);

    getEmployees(value)
      .then(({ data }) => {
        setEmployees(data);
      })
      .catch(() => {
        // TODO: Error handling implementation here
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const handleQueryChange = debounce(getEmployeesByQuery, debounceTimeout);
  const handleColumnClick = (columnName: string) => {
    if (filterColumn === columnName) {
      setFilterColumnAsc(!filterColumnAsc); // Invert order
      return;
    }

    setFilterColumn(columnName);
  }

  return (
    <div className="dashboard">
      <div className="dashboard__filters-container">
        <TextInput fullWidth handleChange={handleQueryChange} name={'table-query'} label="Filter query" />
      </div>
      {loading ? <p>Loading...</p> : <EmployeeTable data={employees} handleColumnClick={handleColumnClick} />}
    </div>
  );
}