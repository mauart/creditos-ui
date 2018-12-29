import { Component, OnInit } from '@angular/core';
import { NgbTabsetConfig } from '@ng-bootstrap/ng-bootstrap';
import {IOption} from 'ng-select';
import {Router} from '@angular/router';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.scss']
})
export class UsuarioComponent implements OnInit {

  public tipoDropdown: Array<IOption> = [
    {label: 'Asesor Financiero', value: 'aFinanciero'},
    {label: 'Asesor Telemarketing', value: 'aTelemarketing'},
    {label: 'Asesor Cambaceo', value: 'aCambaceo'},
    {label: 'Coordinador', value: 'coordinador'},
    {label: 'Gerente', value: 'gerente'},
    {label: 'Administrator', value: 'administrator'},
    {label: 'Asistente', value: 'asistente'}
  ];
  public activoDropdown: Array<IOption> = [
    {label: 'Si', value: 'si'},
    {label: 'No', value: 'no'}
  ];
  public cordinadorDropdown: Array<IOption> = [
    {label: 'Coordinador', value: 'coordinador'},
    {label: 'Gerente', value: 'gerente'}
  ];
  constructor(private config: NgbTabsetConfig, private router: Router) {
    this.config.justify = 'center';
    this.config.type = 'pills';
  }
  onCancelar() {
    console.log('usuarios');
    this.router.navigate(['/home/usuarios']);
  }
  ngOnInit() {
  }

}
