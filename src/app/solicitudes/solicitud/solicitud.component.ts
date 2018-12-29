import { Component, OnInit } from '@angular/core';
import {NgbTabsetConfig} from '@ng-bootstrap/ng-bootstrap';
import {Router} from '@angular/router';
import {IOption} from 'ng-select';

@Component({
  selector: 'app-solicitud',
  templateUrl: './solicitud.component.html',
  styleUrls: ['./solicitud.component.scss']
})
export class SolicitudComponent implements OnInit {
  public tipoDropdown: Array<IOption> = [
    {label: 'todas las opciones', value: 'none'}
  ];
  public periodoDropdown: Array<IOption> = [
    {label: 'Meses', value: 'meses'},
    {label: 'Quincenas', value: 'quincenas'}
  ];
  public plazoDropdown: Array<IOption> = [
    {label: 'todas las opciones', value: 'none'}
  ];
  public productoDropdown: Array<IOption> = [
    {label: 'Pensionado', value: 'pensionado'},
    {label: 'Jubilado', value: 'jubilado'}
  ];
  public generoDropdown: Array<IOption> = [
    {label: 'Masculino', value: 'masculino'},
    {label: 'Femenino', value: 'femenino'}
  ];
  public eCivilDropdown: Array<IOption> = [
    {label: 'Soltero', value: 'soltero'},
    {label: 'Casado', value: 'casado'},
    {label: 'Divorsiado', value: 'divorsiado'},
    {label: 'Viudo', value: 'viudo'}
  ];
  constructor(private config: NgbTabsetConfig, private router: Router) {
    this.config.justify = 'center';
    this.config.type = 'pills';
  }
  onCancelar() {
    this.router.navigate(['/home/solicitudes']);
  }
  ngOnInit() {
  }
  onTipoSelected(tipo) {
    console.log(tipo.value);
  }
}
