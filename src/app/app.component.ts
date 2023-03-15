import { Component } from '@angular/core';
import { Menu } from './data/menu';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  menu = Menu
  title = 'app';
}
