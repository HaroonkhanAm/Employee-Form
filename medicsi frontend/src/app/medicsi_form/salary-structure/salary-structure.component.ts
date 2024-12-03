import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FlexLayoutServerModule } from '@angular/flex-layout/server';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatTableModule } from '@angular/material/table';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-salary-structure',
  standalone: true,
  imports: [
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatSelectModule,
    MatRadioModule,
    MatIconModule,
    CommonModule,
    FlexLayoutModule,
    FlexLayoutServerModule,
    MatCheckboxModule,
    MatTableModule,
    ReactiveFormsModule,
  ],
  templateUrl: './salary-structure.component.html',
  styleUrls: ['./salary-structure.component.scss'],
})
export class SalaryStructureComponent {
  @Input() salaryStructure: any;
}
