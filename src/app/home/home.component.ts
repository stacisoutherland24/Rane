import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  title = 'Rane Beauty Studio';
  goToSquarespace() {
    window.open('https://lashed-by-haley-rane.square.site','blank');
  }
  goToXtreme() {
    window.open('https://www.xtremelashes.com','blank')
  }
}
