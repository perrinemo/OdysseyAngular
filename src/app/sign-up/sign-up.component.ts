import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sign-up',
  template: "<h1>emailRenseignéDansInput</h1><input type='email' name='email'/>"
})
export class SignUpComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
