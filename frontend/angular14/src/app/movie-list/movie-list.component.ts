import { Component, OnInit } from '@angular/core';
import { MovieCardComponent } from './movie-card/movie-card.component';
import {MatListModule} from '@angular/material/list'; 

@Component({
  standalone: true,
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss'],
  imports: [
    MovieCardComponent,
    MatListModule
  ]
})
export class MovieListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
