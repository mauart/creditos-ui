import { Component, OnInit } from '@angular/core';
import {NgbTabsetConfig} from '@ng-bootstrap/ng-bootstrap';
import {IOption} from 'ng-select';

@Component({
  selector: 'app-recotizacion-inicial',
  templateUrl: './recotizacion-inicial.component.html',
  styleUrls: ['./recotizacion-inicial.component.scss']
})
export class RecotizacionInicialComponent implements OnInit {
  public montoDeseado: number;
  public plazoDes: Array<IOption> = [
    {label: '1 Mes', value: '1 mes'},
    {label: '2 Meses', value: '2 meses'}
  ];
  public interesCred: Array<IOption> = [
    {label: 'Si', value: 'si'},
    {label: 'No', value: 'no'}
  ];
  public recotizacion = {
    nombre: '',
    nss: '',
    email: '',
    tel: '',
    interes: '',
    plazo: ''
  }
  constructor(private config: NgbTabsetConfig) {
    this.config.justify = 'center';
    this.config.type = 'pills';
  }

  ngOnInit() {
  }
  onReCotizar() {
    console.log(this.recotizacion);
  }
  onInteresSelected(interes) {
    this.recotizacion.interes = interes.value;
  }
  onPlazoSelected(plazo) {
    this.recotizacion.plazo = plazo.value;
  }
}
