import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Employee } from '../employee';
import { Observable } from 'rxjs';
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router';
import { FormsModule, NgForm } from '@angular/forms';





@Component({
  selector: 'app-add-employee',
  standalone: true, 
  templateUrl: './add-employee.component.html',
  imports: [FormsModule,CommonModule] ,
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent //implements OnInit//
{

  constructor(
    private employeeService: EmployeeService,
    private router: Router,

  ) {

  }




 
 

  submitform!: NgForm;
  private baseURL = "http://localhost:8080/api/v1/employees";
  employee: Employee = new Employee();
  




  saveEmployee() {
    this.employeeService.addEmployee(this.employee).subscribe(data => {
      console.log(data);
      this.goToEmployeeList();
    },
      error => console.log(error));
  }

  goToEmployeeList() {
    this.router.navigate(['/']);
  }

  ngOnInit(): void { }
  onSubmit() {
    console.log(this.employee);


    this.saveEmployee();
  }


}