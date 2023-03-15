import { Component, Input, OnInit } from '@angular/core';
import { MenuItem } from './models/menuItem';

@Component({
  selector: 'app-wp-menu',
  templateUrl: './wp-menu.component.html',
  styleUrls: ['./wp-menu.component.scss']
})
export class WpMenuComponent implements OnInit {
@Input() menu:MenuItem[]
  constructor() { }

  ngOnInit() {
    console.log(this.menu)
  }

}
