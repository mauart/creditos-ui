import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from './services/authentication.service';
import {ActivatedRoute, Router} from '@angular/router';
import { takeUntil } from 'rxjs/operators';
import {Subject} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  private unsubs = new Subject<void>();
  constructor(private authService: AuthenticationService,
              private router: Router,
              private route: ActivatedRoute) {
    this.router.events.pipe(takeUntil(this.unsubs))
      .subscribe((ro) => {
        if ((ro as any).url && (!(ro as any).url.includes('dmz'))) {
          console.log((ro as any).url);
          this.a();
          this.unsubs.next(); // unsubscribe to stop loop
        }
      });
  }

  ngOnInit() {

  }
  private a() {
    this.authService.authStateChange()
      .subscribe((data) => {
        if (data) {
          this.router.navigate(['/home'], {relativeTo: this.route});
        } else {
          this.router.navigate(['signin'], {relativeTo: this.route});
        }
      }, (error) => {
        this.router.navigate(['signin'], {relativeTo: this.route});
        console.log(error);
      });
  }
}
