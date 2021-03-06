import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { map } from 'rxjs/operators';
import { InsertMovieGQL, MovieStatsGQL } from 'src/generated/graphql';
import { InsertMovieDialogComponent } from '../insert-movie-dialog/insert-movie-dialog.component';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  constructor(
    private dialog: MatDialog,
    private insertMovieGQL: InsertMovieGQL,
    private movieStatsGQL: MovieStatsGQL
  ) { }

  @Input()
  page: 'list' | 'about' = 'list'

  @Output()
  togglePage = new EventEmitter()

  movieStats$ = this.movieStatsGQL.subscribe().pipe(map(it => it.data?.movieStats))

  ngOnInit(): void {
  }

  onInsertMovie(): void {
    const dialogRef = this.dialog.open(InsertMovieDialogComponent, {
      width: '350px',
      data: { title: "", description: "" },
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.insertMovieGQL.mutate(result).subscribe()
      }
    });
  }

  getTogglePageIcon() {
    switch (this.page) {
      case 'about': return 'list'
      case 'list': return 'info'
    }
  }

  onTogglePage() {
    this.togglePage.emit()
  }

}
