import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GeneralInfoComponent } from './medicsi_form/general-info/general-info.component';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import { JobDescriptionComponent } from './medicsi_form/job-description/job-description.component';
import { SalaryStructureComponent } from './medicsi_form/salary-structure/salary-structure.component';
import { EmployeeModel } from './data/dataModel';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { EmployeeService } from './services/employee.service';
import { EmployeeViewComponent } from './medicsi_form/employee-view/employee-view.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    GeneralInfoComponent,
    MatTabsModule,
    MatCardModule,
    JobDescriptionComponent,
    SalaryStructureComponent,
    FontAwesomeModule,
    EmployeeViewComponent,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'], // Corrected to styleUrls
})
export class AppComponent {
  title = 'medicsi';

  medicsiFormGroup: FormGroup;
  medicsiEmployeeModel: EmployeeModel[] = [];

  constructor(
    private fb: FormBuilder,
    private employeeService: EmployeeService
  ) {
    this.medicsiFormGroup = this.fb.group({
      generalInfo: this.fb.group({
        type: [''],
        employeeNumber: [''],
        cnic: [''],
        cnicExpiryDate: [null],
        name: [''],
        relation: [''],
        relationName: [''],
        religion: [''],
        gender: [''],
        employeeFor: [''],
        maritalStatus: [''],
        //languages: [[]],
        passportNumber: [''],
        passportExpiryDate: [null],
        registrationNumber: [''],
        validity: [null],
        pmdc: [''],
        pmdcExpiryDate: [null],
        pnc: [''],
        pncExpiryDate: [null],
        drivingLicence: [''],
        drivingLicenceExpiryDate: [null],
        branch: [''],
        department: [''],
        category: [''],
        employmentType: [''],
        startDate: [null],
        endDate: [null],
        dob: [null],
        bloodGroup: [''],
        email: ['', Validators.email],
        landLine: [0],
        mobileNumber: [0],
        fax: [0],
        address: [''],
        joiningDate: [null],
        qualifications: this.fb.array([]),
        experiences: this.fb.array([]),
        kinName: [''],
        kinRelation: [''],
        kinPhoneNumber: [0],
        kinMobileNumber: [0],
        kinOccupation: [''],
        kinAddress: [''],
      }),
      salaryStructure: this.fb.group({
        type: [''],
        leaveCustom: [],
        leaveNotPaid: [false],
        basicHours: [''],
        salary: [0],
        overtimeRatePerHour: [0],
        conveyanceAmount: [0],
        educationAmount: [0],
        hostelRent: [0],
        oebiDeduction: [0],
        loanDeduction: [0],
        transportDeduction: [0],
        cafeteriaBill: [0],
        annualLeave: [0],
        sickLeave: [0],
        bankName: [''],
        modeOfPayment: [''],
      }),
      jobDescription: this.fb.group({
        salary: [''],
        category: [''],
        benefits: [''],
      }),
    });
  }

  save() {
    const formData = this.medicsiFormGroup.getRawValue();
    const flattenedData = {
      ...formData.generalInfo, // Spread generalInfo fields as top-level keys
      ...formData.salaryStructure, // Spread salaryStructure fields as top-level keys
    };
    console.log(`Flattened-Data`, flattenedData);
    // let item = {
    //   employeeNumber: (
    //     this.medicsiFormGroup.get('generalInfo') as FormGroup
    //   ).get('employeeNumber')?.value,
    //   cnic: (
    //     this.medicsiFormGroup.get('generalInfo') as FormGroup
    //   ).get('cnic')?.value,
    // };

    console.log('Form Data:', formData);

    this.employeeService.submitForm(flattenedData).subscribe({
      next: (response) => {
        console.log('Form submitted successfully:', response);
        alert('Form submitted successfully!');
      },
      error: (error) => {
        console.error('Error submitting form:', error);
        alert('Failed to submit form.');
      },
    });
  }
}
