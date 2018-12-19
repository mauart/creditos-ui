import { Component, OnInit } from '@angular/core';
import { NgbTabsetConfig } from '@ng-bootstrap/ng-bootstrap';
import { environment } from '../../environments/environment';
import { AuthenticationService } from '../services/authentication.service';

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
  constructor(private config: NgbTabsetConfig, private authService: AuthenticationService) {
    this.config.justify = 'center';
    this.config.type = 'pills';
  }

  ngOnInit() {
  }
  onSignIn() {
    this.authService.signin(this.user.email, this.user.password)
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }
}
