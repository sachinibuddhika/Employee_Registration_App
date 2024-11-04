import { Component, OnInit } from '@angular/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatSelectModule} from '@angular/material/select';
import {FormControl, FormsModule, NgForm, ReactiveFormsModule} from '@angular/forms';
import {MatCheckboxChange, MatCheckboxModule} from '@angular/material/checkbox';
import {MatRadioModule} from '@angular/material/radio';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import { Employee } from '../employee.model';
import { EmployeeService } from '../employee.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Route, Router, RouterModule } from '@angular/router';



@Component({
  selector: 'app-employee',
  standalone: true,
  imports: [MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatCheckboxModule,
    MatSelectModule, FormsModule,
    MatRadioModule,
    RouterModule,
    MatDividerModule,
    CommonModule,
    MatButtonModule,
    HttpClientModule],
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.css'
})
export class EmployeeComponent  implements OnInit{
  employee:Employee ={
    employeeId: 0,
    employeeName: '',
    employeeContactNumber: '',
    employeeAddress: '',
    employeeGender: '',
    employeeDepartment: '',
    employeeSkills: ''
  };

  skills:string[]=[];
   
  constructor(
    private employeeService:EmployeeService,
     private router:Router
  ){

  }
  ngOnInit(): void {
   
  }

selectGender(gender:string):void{
this.employee.employeeGender=gender;
console.log("selected gender" + this.employee.employeeGender);
}



onSkillsChanges(event:any):void{

console.log(event);
if(event.checked){
this.skills.push(event.source.value);
}
else{
  const index = this.skills.indexOf(event.source.value);
  if (index > -1) {
    this.skills.splice(index, 1);
  }
}

this.employee.employeeSkills=this.skills.toString();

}




checkSkills(skill:string){
  return this.employee.employeeSkills !=null && this.employee.employeeSkills.includes(skill);

}


saveEmployee(employeeForm:NgForm):void{
this.employeeService.saveEmployee(this.employee).subscribe(
  {
    next:(res:Employee)=>{
      console.log(res);
      employeeForm.reset();
      this.employee.employeeGender='';
      this.skills = [];
      this.employee.employeeSkills = '';
       this.router.navigate(["/employee-list"]);
       
      
    },
    error:(err)=>{
      console.log(err);
    }
  }
);


}
}
