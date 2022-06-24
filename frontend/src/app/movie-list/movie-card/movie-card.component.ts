import { Component, OnInit } from '@angular/core';
import {MatCardModule} from '@angular/material/card'; 

@Component({
  standalone: true,
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss'],
  imports: [
    MatCardModule
  ]
})
export class MovieCardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
