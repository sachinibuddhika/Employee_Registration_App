import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from './employee.model';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  private api = 'http://localhost:8080';

  constructor(private httpClient: HttpClient) {}

  public saveEmployee(employee: Employee): Observable<Employee> {
    return this.httpClient.post<Employee>(`${this.api}/save/employee`, employee);
  }

  public getEmployees():Observable<Employee[]>{
    return this.httpClient.get<Employee[]>(`${this.api}/get/employees`);
  }
}