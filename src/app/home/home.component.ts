import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../services/authentication.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public id;
  constructor(private authService: AuthenticationService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.id = this.authService.getActiveUser().email.split('@')[0];
  }
  onSolicitudes() {
    console.log('redirecting to solicitudes');
    this.router.navigate(['/home/solicitudes']);
  }
  onSolicitantes() {
    console.log('redirecting to solicitantes');
    this.router.navigate(['/home/solicitantes']);
  }
  onHome() {
    console.log('redirecting to home');
    this.router.navigate(['/home']);
  }
  onUsuarios() {
    console.log('redirecting to usuarios');
    this.router.navigate(['/home/usuarios']);
  }
  onProdConvenios() {
    console.log('redirecting to productos/convenios');
    this.router.navigate(['/home/prod-conv']);
  }
  onPlantillas() {
    console.log('redirecting to plantillas');
    this.router.navigate(['/home/plantillas']);
  }
  onReportes() {
    console.log('redirecting to reportes');
    this.router.navigate(['/home/reportes']);
  }
}
