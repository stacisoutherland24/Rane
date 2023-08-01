import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  title = 'Rane Beauty Studio';
  goToSquarespace() {
    window.location.href = 'https://lashed-by-haley-rane.square.site';
  }
  goToXtreme() {
    window.location.href = 'https://www.xtremelashes.com/';
  }
}
