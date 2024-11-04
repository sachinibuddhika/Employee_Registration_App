import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Employee } from '../employee.model';
import { HttpErrorResponse } from '@angular/common/http';
import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-employee-list',
  standalone: true,
  imports: [MatTableModule,MatButtonModule,RouterModule],
  templateUrl: './employee-list.component.html',
  styleUrl: './employee-list.component.css'
})
export class EmployeeListComponent implements OnInit{
  displayedColumns: string[] = ['employeeId', 'employeeName', 'employeeContactNumber', 'employeeAddress','employeeGender','employeeDepartment','employeeSkills'];
  dataSource:Employee[]=[];

  constructor(private employeeService:EmployeeService){
  this.getEmployeeList();
  }
  ngOnInit(): void {

  }

getEmployeeList():void{
  this.employeeService.getEmployees().subscribe(
    {
      next:(res:Employee[])=>{
        this.dataSource=res;
        console.log(res);
      },
      error:(err:HttpErrorResponse)=>{
        console.log(err);
      }
    }
  );
}
 




}