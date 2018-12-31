import { Component, OnInit } from '@angular/core';
import { NgbTabsetConfig } from '@ng-bootstrap/ng-bootstrap';
import {Router} from '@angular/router';

@Component({
  selector: 'app-productos-convenios',
  templateUrl: './productos-convenios.component.html',
  styleUrls: ['./productos-convenios.component.scss']
})
export class ProductosConveniosComponent implements OnInit {

  constructor(private config: NgbTabsetConfig, private router: Router) {
    this.config.justify = 'center';
    this.config.type = 'pills';
  }

  ngOnInit() {
  }
  onNuevo() {
    this.router.navigate(['/home/nuevo-prod-conv']);
  }

}
