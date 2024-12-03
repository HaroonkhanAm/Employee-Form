import { Component, Input } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { MatTabsModule } from '@angular/material/tabs';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { AngularEditorConfig } from '@kolkov/angular-editor';

@Component({
  selector: 'app-job-description',
  standalone: true,
  imports: [
    FormsModule,
    MatCardModule,
    MatButtonModule,
    CommonModule,
    MatTabsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule,
    AngularEditorModule,
  ],

  templateUrl: './job-description.component.html',
  styleUrl: './job-description.component.scss',
})
export class JobDescriptionComponent {
  @Input() jobDescription!: any;
  config: AngularEditorConfig = {
    editable: true,
    spellcheck: true,
    height: '15rem',
    minHeight: '5rem',
    translate: 'no',
    defaultParagraphSeparator: 'p',
    defaultFontName: 'Arial',
  };
  editingField: string | null = null;

  // Start editing a specific field
  editContent(field: string): void {
    this.editingField = field;
  }

  // Save the content of a specific field
  saveContent(): void {
    if (this.editingField) {
      this.editingField = null; // Exit editing mode
    }
  }

  // Cancel editing mode without saving
  cancelEdit(): void {
    this.editingField = null; // Exit editing mode
  }
}
