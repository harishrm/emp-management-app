import { Component } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import{FormsModule} from '@angular/forms'
import { CommonModule } from '@angular/common';

import { Router } from '@angular/router';
@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  imports: [FormsModule,CommonModule] ,
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent {

  employees: Employee[];
  EnteredID!:number;
  fname!:string;
  EnteredName: string = '';
  filteredEmployees: Employee[] = [];

  constructor(private employeeService: EmployeeService,  private router: Router) {
    this.employees=[];
   
   }

  ngOnInit(): void {
    
    this.employees = [
      { "id":1,fname: 'John',lname: 'Doe', email: 'john@example.com', salary: 50000, department: 'IT', designation: 'Developer' ,joiningDate:"20-01-2024"},
      { "id":2,fname: 'Donald',lname: 'OConnell', email: 'donald@example.com', salary: 25000, department: 'Network Administrator', designation: 'Developer' ,joiningDate:"05-07-2023"},
      { "id":3,fname: 'Michael',lname: 'Hartstein', email: 'michael@example.com', salary: 90000, department: 'IT', designation: 'Manager' ,joiningDate:"01-08-2022"},
      { "id":4,fname: 'Hermann',lname: 'Baer', email: 'hermann@example.com', salary: 86000, department: 'IT', designation: 'Director' ,joiningDate:"09-09-2025"},
      { "id":5,fname: 'Steven',lname: 'King', email: 'steven@example.com', salary: 78000, department: 'IT', designation: 'IT Systems Architect' ,joiningDate:"20-07-2021"},
      { "id":6,fname: 'Alexander',lname: 'Hunold', email: 'alex@example.com', salary: 20000, department: 'IT', designation: 'Analyst' ,joiningDate:"06-06-2022"},
      { "id":7,fname: 'John',lname: 'Doe', email: 'john@example.com', salary: 50000, department: 'IT', designation: 'Developer' ,joiningDate:"20-01-2024"},
     
    ];
    
    // this.getEmployees();
  }

  searchEmployees() {
    const name = this.EnteredName.trim().toLowerCase();
  
    this.filteredEmployees = this.employees.filter(e =>
      e.fname.toLowerCase().includes(name) || e.lname.toLowerCase().includes(name)
    );
  
    if (this.filteredEmployees.length === 0) {
      alert('No matching employees found!');
    }
  }

  viewDetails(emp: Employee) {
    this.router.navigate(['details-of-employee', emp.id], { state: { employee: emp } });
  }

  goToEmployee(){

    const searchValue = this.EnteredName.toLowerCase().trim();
    if (searchValue) {
      this.filteredEmployees = this.employees.filter(emp =>
        emp.fname.toLowerCase().includes(searchValue) || 
        emp.lname.toLowerCase().includes(searchValue)
      );
    } else {
      this.filteredEmployees = [];
    }
  // const name = this.EnteredName.trim().toLowerCase();
  // const emp = this.employees.find(e =>
  //   e.fname.toLowerCase().includes(name)  || e.lname.toLowerCase().includes(name)
  // );

  // if (emp) {
  //   this.router.navigate(['details-of-employee', emp.id], { state: { employee: emp } });
  // } else {
  //   alert('Employee not found!');
  // }
 
  }

  getEmployees(){
    this.employeeService.getEmployeesList().subscribe(data => {this.employees = data;});

    
  }

  updateEmployee(id: number){
    this.router.navigate(['updating-by-id', id]);
  }




  deleteEmployee(id: number){

    if(confirm("Are you sure to delete Employee ID: "+id)){
    this.employeeService.deleteEmployee(id).subscribe( data => {
      console.log(data);
      this.getEmployees();
    })}
  }
 

  detailsOfEmployee(id: number){
    const emp = this.employees.find(emp => emp.id === id);
    this.router.navigate(['details-of-employee', id], { state: {  employee: emp } });
    // this.router.navigate(['details-of-employee', id]);
  }

  
}