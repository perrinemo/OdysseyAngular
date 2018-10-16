import { Component } from '@angular/core';
import { SignUpComponent } from './sign-up/sign-up.component';
import { UserProfileComponent } from './user-profile/user-profile.component';

@Component({
  selector: 'app-root',
  template: '<user-profile></user-profile>',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Perrine';
}
