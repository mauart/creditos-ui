import { Component, OnInit } from '@angular/core';
import {IOption} from 'ng-select';
import {Router} from '@angular/router';

@Component({
  selector: 'app-correos',
  templateUrl: './correos.component.html',
  styleUrls: ['./correos.component.scss']
})
export class CorreosComponent implements OnInit {
  public activoDropdown: Array<IOption> = [
    {label: 'Si', value: 'si'},
    {label: 'No', value: 'no'}
  ];

  public statusDropdown: Array<IOption> = [
    {label: 'todas las opciones', value: 'none'}
  ];
  public tiempoEsperaDropDown: Array<IOption> = [
    {label: '0 Horas', value: '0hr'},
    {label: '24 Horas', value: '24hr'},
    {label: '48 Horas', value: '48hr'},
    {label: '72 Horas', value: '72hr'}

  ];
  public correo = {
    nombre: '',
    activo: '',
    status: '',
    tiempoEspera: '',
    titulo: '',
    enviarA: '',
    copiaA: '',
    texto: ''
  };
  constructor(private router: Router) { }

  ngOnInit() {
  }
  onStatusSelected(selection) {
    this.correo.status = selection.value;
  }

  onActivoSelected(selection) {
    this.correo.activo = selection.value;
  }

  onTiempoEsperaSelected(selection) {
    this.correo.tiempoEspera = selection.value;
  }
  onGuardar() {
    console.log(this.correo);
  }
  onCancel() {
    this.router.navigate(['/home/plantillas']);
  }
}
