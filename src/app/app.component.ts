import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from './services/authentication.service';
import {ActivatedRoute, Router} from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public id: string;
  constructor(private authService: AuthenticationService,
              private router: Router,
              private route: ActivatedRoute) {

  }
  ngOnInit() {
    this.authService.authStateChange()
      .subscribe((data) => {
        if (data) {
          this.router.navigate(['/home'], {relativeTo: this.route});
          this.id = this.authService.getActiveUser().email.split('@')[0];
        } else {
          this.router.navigate(['signin'], {relativeTo: this.route});
        }
      }, (error) => {
        this.router.navigate(['signin'], {relativeTo: this.route});
        console.log(error);
      });
  }
  onSolicitudes() {
    console.log('redirecting to solicitudes');
    this.router.navigate(['/solicitudes']);
  }
  onHome() {
    console.log('redirecting to home');
    this.router.navigate(['/home']);
  }
  onUsuarios() {
    console.log('redirecting to usuarios');
    this.router.navigate(['/usuarios']);
  }
}
