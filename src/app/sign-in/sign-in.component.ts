import { Component, OnInit } from '@angular/core';
import { NgbTabsetConfig } from '@ng-bootstrap/ng-bootstrap';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
  providers: [NgbTabsetConfig]
})
export class SignInComponent implements OnInit {
  public version = environment.VERSION;
  public user = {
    email: '',
    password: ''
  };
  constructor(config: NgbTabsetConfig) {
    config.justify = 'center';
    config.type = 'pills';
  }

  ngOnInit() {
  }
  onSignIn() {
    console.log('logging in', this.user);
  }
}
