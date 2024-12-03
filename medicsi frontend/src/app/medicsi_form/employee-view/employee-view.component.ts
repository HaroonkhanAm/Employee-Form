import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../services/employee.service';
import { MatTableModule } from '@angular/material/table';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FlexLayoutServerModule } from '@angular/flex-layout/server';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-employee-view',
  standalone: true,
  imports: [
    MatTableModule,
    CommonModule,
    FlexLayoutModule,
    FlexLayoutServerModule,
    ReactiveFormsModule,
  ],
  templateUrl: './employee-view.component.html',
  styleUrl: './employee-view.component.scss',
})
export class EmployeeViewComponent implements OnInit {
  employees: any[] = []; // Array to store all data from the database
  generalInfoColumns: string[] = [
    'id',
    'employeeNumber',
    'name',
    'cnic',
    'cnicExpiryDate',
    'salary',
  ];
  salaryStructureColumns: string[] = [
    'id',
    'salary',
    'type',
    'bankName',
    'modeOfPayment',
  ];

  constructor(private employeeService: EmployeeService) {}

  ngOnInit(): void {
    this.fetchEmployees(); // Fetch data on component initialization
  }

  fetchEmployees(): void {
    this.employeeService.getEmployees().subscribe({
      next: (data) => {
        this.employees = data; // Store the data in the array
        console.log(`Fetch data from Database`, this.employees); // Log the data for debugging
      },
      error: (err) => {
        console.error('Error fetching employees:', err);
      },
    });
  }
}
