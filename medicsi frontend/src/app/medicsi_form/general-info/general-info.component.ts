import {
  Component,
  ChangeDetectionStrategy,
  OnInit,
  Input,
} from '@angular/core';
import { provideNativeDateAdapter } from '@angular/material/core';
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
import { ReactiveFormsModule, FormBuilder, FormArray } from '@angular/forms';

@Component({
  selector: 'app-general-info',
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
    ReactiveFormsModule,
  ],
  providers: [provideNativeDateAdapter()],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './general-info.component.html',
  styleUrls: ['./general-info.component.scss'],
})
export class GeneralInfoComponent implements OnInit {
  @Input() generalInfo: any;

  constructor(private fb: FormBuilder) {}
  ngOnInit() {
    console.log('generalInfo FormGroup:', this.generalInfo.getRawValue());
  }

  get qualifications(): FormArray {
    return this.generalInfo.get('qualifications') as FormArray;
  }

  get experiences(): FormArray {
    return this.generalInfo.get('experiences') as FormArray;
  }

  addQualification() {
    this.qualifications.push(
      this.fb.group({
        degree: [''],
        instituteName: [''],
        year: [''],
      })
    );
  }

  removeQualification(index: number) {
    this.qualifications.removeAt(index);
  }

  addExperience() {
    this.experiences.push(
      this.fb.group({
        designation: [''],
        organizationName: [''],
        year: [''],
      })
    );
  }

  removeExperience(index: number) {
    this.experiences.removeAt(index);
  }
}
