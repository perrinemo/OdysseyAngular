import { Component } from '@angular/core';
import { MenuComponent } from './menu/menu.component';

@Component({
  selector: 'app-root',
  template: '<menu></menu>,<router-outlet></router-outlet>',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Perrine';
}
