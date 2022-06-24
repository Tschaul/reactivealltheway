import { Component, Input, OnInit } from '@angular/core';
import { DeleteMovieGQL, LikeMovieGQL } from 'src/generated/graphql';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss'],
})
export class MovieCardComponent implements OnInit {

  @Input()
  id: string = "";

  @Input()
  title: string = "";

  @Input()
  description: string = "";

  @Input()
  likes: number = 0;

  constructor(
    private deleteMovieGQL: DeleteMovieGQL,
    private likeMovieGQL: LikeMovieGQL
  ) { }

  ngOnInit(): void {
  }

  onDeleteMovie() {
    this.deleteMovieGQL.mutate({id: this.id}).subscribe()
  }

  onLikeMovie() {
    this.likeMovieGQL.mutate({id: this.id}).subscribe()
  }

}
