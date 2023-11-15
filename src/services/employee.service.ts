import { Employee } from '../interfaces/employee';

interface EmployeeResponsePayload {
  data: Employee[];
}

const allEmployees = [
  {
    company: 'Alfreds Futterkiste',
    contact: 'Maria Anders',
    country: 'Germany',
  },
  {
    company: 'Centro comercial Moctezuma',
    contact: 'Francisco Chang',
    country: 'Mexico',
  },
  {
    company: 'Ernst Handel',
    contact: 'Roland Mendel',
    country: 'Austria',
  },
  {
    company: 'Island Trading',
    contact: 'Helen Bennett',
    country: 'UK',
  },
  {
    company: 'Laughing Bacchus Winecellars',
    contact: 'Yoshi Tannamuri',
    country: 'Canada',
  },
  {
    company: 'Magazzini Alimentari Riuniti',
    contact: 'Giovanni Rovelli',
    country: 'Italy',
  }
];
export const getEmployees = (query?: string): Promise<EmployeeResponsePayload> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      // Simulate BE request timing
      if (!query) {
        resolve({ data: allEmployees });
        return;
      }

      // Simulate filtering
      const filteredEmployees = allEmployees.filter(employee => {
        return Object.values(employee).some(property => {
          // Check match on each property
          return property.toUpperCase().includes(query.toUpperCase());
        });
      });

      resolve({ data: filteredEmployees });
    }, 3000);
  })
};

export const postNewEmployee = (employee: Employee): Promise<void> => {
  console.log(`Adding new: ${JSON.stringify(employee)}`);

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 3000);
  })
};
