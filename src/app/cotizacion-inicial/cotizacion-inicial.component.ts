import { Component, OnInit } from '@angular/core';
import { NgbTabsetConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-cotizacion-inicial',
  templateUrl: './cotizacion-inicial.component.html',
  styleUrls: ['./cotizacion-inicial.component.scss']
})
export class CotizacionInicialComponent implements OnInit {
  public montoDeseado: number;
  constructor(private config: NgbTabsetConfig) {
    this.config.justify = 'center';
    this.config.type = 'pills';
  }

  ngOnInit() {
  }
  onReCotizar() {
    console.log(this.montoDeseado);
  }
}
