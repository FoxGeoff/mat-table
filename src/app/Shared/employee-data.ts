import { getMaxListeners } from "process";
import { Employee } from "./interfaces/employee";

export class EmployeeData {

  private employees: Employee[] = [
    { id: 1, companyId: 1, firstName: 'Arvilla', lastName: 'Hazel', email: 'ah@gmail.com', phone: '858-666-123', isActive: true },
    { id: 2, companyId: 1, firstName: 'Demetrius', lastName: 'Johnson', email: 'dj@gmail.com', phone: '858-676-123', isActive: true },
    { id: 3, companyId: 1, firstName: 'Brian', lastName: 'Hemenway', email: 'bh@gmail.com', phone: '858-567-700', isActive: true },
    { id: 4, companyId: 1, firstName: 'Elise', lastName: 'Toohey', email: 'et@gmail.com', phone: '858-245-687', isActive: true },
    { id: 5, companyId: 1, firstName: 'Marcella', lastName: 'Ryberg', email: 'mr@gmail.com', phone: '858-829-122', isActive: true },
    { id: 6, companyId: 1, firstName: 'Joe', lastName: 'Conyers', email: 'jj@gmail.com', phone: '858-164-153', isActive: true },
  ];

  getAllEmployees(): Employee[] {
    return this.employees.slice();
  }

}
