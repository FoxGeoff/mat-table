import { Injectable } from '@angular/core';
import { Employee} from '../Shared/interfaces/employee'

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor() { }

  getEmployees(): Employee[] {
    return this.allEmployees.slice();
  }
}
