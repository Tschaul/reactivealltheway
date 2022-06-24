import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

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
    MatCardModule
  ]
})
export class MovieCardModule { }
