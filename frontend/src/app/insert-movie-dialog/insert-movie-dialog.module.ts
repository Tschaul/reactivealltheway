import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InsertMovieDialogComponent } from './insert-movie-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [
    InsertMovieDialogComponent
  ],
  exports: [
    InsertMovieDialogComponent
  ],
  imports: [
    CommonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatButtonModule,
    FormsModule,MatInputModule
  ]
})
export class InsertMovieDialogModule { }
