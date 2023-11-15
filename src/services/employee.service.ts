import { Employee } from '../interfaces/employee';

interface EmployeeResponsePayload {
  data: Employee[];
}

const allEmployees = [
  {
    uid: '44fd825a-839f-11ee-b962-0242ac120002',
    company: 'Alfreds Futterkiste',
    contact: 'Maria Anders',
    country: 'Germany',
  },
  {
    uid: '44fd825a-239f-11ee-b962-024232320002',
    company: 'Centro comercial Moctezuma',
    contact: 'Francisco Chang',
    country: 'Mexico',
  },
  {
    uid: '44fd825a-659f-11ee-b962-0242a1230002',
    company: 'Ernst Handel',
    contact: 'Roland Mendel',
    country: 'Austria',
  },
  {
    uid: '44fd825a-8hhf-11ee-b962-0242ac12qwe02',
    company: 'Island Trading',
    contact: 'Helen Bennett',
    country: 'UK',
  },
  {
    uid: '44fd825a-ss39f-wwee-b962-0242ac120002',
    company: 'Laughing Bacchus Winecellars',
    contact: 'Yoshi Tannamuri',
    country: 'Canada',
  },
  {
    uid: '44fd825a-hg9f-11ee-b962-0242a3220002',
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
