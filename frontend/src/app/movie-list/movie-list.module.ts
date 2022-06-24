import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MovieCardModule } from './movie-card/movie-card.module';
import {MatListModule} from '@angular/material/list'; 
import { MovieListComponent } from './movie-list.component';


@NgModule({
  declarations: [
    MovieListComponent
  ],
  exports: [
    MovieListComponent
  ],
  imports: [
    CommonModule,
    MovieCardModule,
    MatListModule
  ]
})
export class MovieListModule { }
