import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface DialogData {
  title: string,
  description: string
}

@Component({
  selector: 'app-insert-movie-dialog',
  templateUrl: './insert-movie-dialog.component.html',
  styleUrls: ['./insert-movie-dialog.component.scss']
})
export class InsertMovieDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<InsertMovieDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
  ) { }

  ngOnInit(): void {
  }

  onTitleInput(event: any) {
    this.data.title = event.target.value
  }

  onDescriptionInput(event: any) {
    this.data.description = event.target.value
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
