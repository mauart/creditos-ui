import { Component, OnInit } from '@angular/core';
import {IOption} from 'ng-select';
import {Router} from '@angular/router';

@Component({
  selector: 'app-mensajes',
  templateUrl: './mensajes.component.html',
  styleUrls: ['./mensajes.component.scss']
})
export class MensajesComponent implements OnInit {

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
  public mensaje = {
    nombre: '',
    activo: '',
    status: '',
    tiempoEspera: '',
    mensaje: ''
  };
  constructor(private router: Router) { }

  ngOnInit() {
  }

  onStatusSelected(selection) {
    this.mensaje.status = selection.value;
  }

  onActivoSelected(selection) {
   this.mensaje.activo = selection.value;
  }

  onTiempoEsperaSelected(selection) {
    this.mensaje.tiempoEspera = selection.value;
  }
  onGuardar() {
    console.log(this.mensaje);
  }
  onCancel() {
    this.router.navigate(['/home/plantillas']);
  }
}
