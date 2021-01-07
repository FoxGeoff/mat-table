import { Injectable } from '@angular/core';
import { EmployeeData } from '../Shared/employee-data';
import { Employee} from '../Shared/interfaces/employee'

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private employeeData: EmployeeData) { }

  getEmployees(): Employee[] {
    return this.employeeData.getAllEmployees().slice();
  }
  
}
