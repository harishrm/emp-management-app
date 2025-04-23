import { Component } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import { ActivatedRoute } from '@angular/router';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-show-details',
  templateUrl: './show-details.component.html',
  imports: [RouterModule,CommonModule],
  styleUrls: ['./show-details.component.css']
})
export class ShowDetailsComponent {


  
  id: number
  employee!: Employee
  employees: Employee[];
  constructor(private route: ActivatedRoute, private employeService: EmployeeService,private router: Router) { 
    this.employees=[];
    this.id=0
  }

  // ngOnInit(): void {
  //   this.id = this.route.snapshot.params['id'];

  //   this.employee = new Employee();
  //   this.employeService.getEmployeeById(this.id).subscribe( data => {
  //     this.employee = data;
  //   });
  // }

  ngOnInit(): void {

    // const nav = this.router.getCurrentNavigation();
    const state = window.history.state as { employee?: Employee };
    if (state && state.employee) {
      this.employee = state.employee;
    } else {
      // Optionally: fallback logic if state is missing
      console.error('No employee data found in navigation state');
    }
  }

}