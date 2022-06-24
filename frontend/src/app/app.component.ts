import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  page: 'list' | 'about' = 'list'

  onTogglePage() {
    switch (this.page) {
      case 'about':
        this.page = 'list'
        break;
      case 'list':
        this.page = 'about'
        break;
    }
  }
}
