import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card'; 
import { MovieCardComponent } from './movie-card.component';

@NgModule({
  declarations: [
    MovieCardComponent
  ],
  exports: [
    MovieCardComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
  ]
})
export class MovieCardModule { }
