import { Component, OnInit } from '@angular/core';
import { NgbTabsetConfig } from '@ng-bootstrap/ng-bootstrap';
import { IOption } from 'ng-select';

@Component({
  selector: 'app-solicitar-credito',
  templateUrl: './solicitar-credito.component.html',
  styleUrls: ['./solicitar-credito.component.scss']
})
export class SolicitarCreditoComponent implements OnInit {

  public creditAppliance = {
    tipo: '',
    edad: '',
    pension: '',
    deduccion: ''
  };

  public myOptions: Array<IOption> = [
    {label: 'Pensionado', value: 'pensionado'},
    {label: 'Jubilado', value: 'jubilado'}
  ];
  constructor(private config: NgbTabsetConfig) {
    this.config.justify = 'center';
    this.config.type = 'pills';
  }

  ngOnInit() {
  }
  onTipoSelected(tipoValue) {
    this.creditAppliance.tipo = tipoValue.value;
  }
  onCotizar() {
    console.log(this.creditAppliance);
  }
}
