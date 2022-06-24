import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { AllMoviesGQL } from 'src/generated/graphql';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss'],
})
export class MovieListComponent implements OnInit {

  constructor(private readonly allMoviesGQL: AllMoviesGQL) { }

  allMovies$ = this.allMoviesGQL.subscribe().pipe(map(it => it.data?.allMovies ?? [] ))

  ngOnInit(): void {
  }

}
