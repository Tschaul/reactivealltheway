import { Component, OnInit } from '@angular/core';
import { AllMoviesGQL } from 'src/generated/graphql';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss'],
})
export class MovieListComponent implements OnInit {

  constructor(private readonly allMovies: AllMoviesGQL) { }

  ngOnInit(): void {
  }

}
