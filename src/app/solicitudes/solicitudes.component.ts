import { Component, OnInit } from '@angular/core';
import { NgbTabsetConfig } from '@ng-bootstrap/ng-bootstrap';
import {Router} from '@angular/router';

@Component({
  selector: 'app-solicitudes',
  templateUrl: './solicitudes.component.html',
  styleUrls: ['./solicitudes.component.scss'],
  providers: [NgbTabsetConfig]

})
export class SolicitudesComponent implements OnInit {

  constructor(private config: NgbTabsetConfig, private router: Router) {
    this.config.justify = 'center';
    this.config.type = 'pills';
  }

  ngOnInit() {
  }
  onTabChange(t) {
    console.log(t);
  }
  onNueva() {
    console.log('nueva solicitud');
    this.router.navigate(['/home/solicitudes/solicitud']);
  }
}
