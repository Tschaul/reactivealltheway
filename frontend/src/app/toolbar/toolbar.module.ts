import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ToolbarComponent } from './toolbar.component';
import { InsertMovieDialogModule } from '../insert-movie-dialog/insert-movie-dialog.module';

@NgModule({
  declarations: [
    ToolbarComponent
  ],
  exports: [
    ToolbarComponent
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    InsertMovieDialogModule
  ]
})
export class ToolbarModule { }
