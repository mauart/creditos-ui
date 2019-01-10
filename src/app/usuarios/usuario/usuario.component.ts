import { Component, OnInit } from '@angular/core';
import { NgbTabsetConfig } from '@ng-bootstrap/ng-bootstrap';
import {IOption} from 'ng-select';
import {Router} from '@angular/router';
import {AuthenticationService} from '../../services/authentication.service';
import {UsuariosService} from '../../services/usuarios.service';

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
  public sucursalDropdown: Array<IOption> = [
    {label: 'CDMX', value: 'cdmx'},
    {label: 'Guadalajara', value: 'gdl'}
  ];
  public userInfo = {
    nombre: '',
    tipo: '',
    activo: '',
    usuario: '',
    password: '',
    rango: '',
    fInicio: '',
    fFin: '',
    sucursal: '',
    tMovil: '',
    tFijo: '',
    email: '',
    direccion: '',
    colonia: '',
    ciudad: '',
    estado: '',
    cp: ''
  };

  constructor(private config: NgbTabsetConfig, private router: Router,
              private authService: AuthenticationService, private usuariosService: UsuariosService) {
    this.config.justify = 'center';
    this.config.type = 'pills';
  }
  onCancelar() {
    console.log('usuarios');
    this.router.navigate(['/home/usuarios']);
  }
  ngOnInit() {
  }

  onTipoSelected(event) {
    this.userInfo.tipo = event.value;
  }

  onActivoSelected(event) {
    this.userInfo.activo = event.value;
  }

  onCordinadorSelected(event) {
    this.userInfo.rango = event.value;
  }
  onSucursalSelected(event) {
    this.userInfo.sucursal = event.value;
  }
  onSave() {
    console.log(this.userInfo);
    this.authService.signup(this.userInfo.email, this.userInfo.password).then(() => {
      console.log('user has been created');
      this.usuariosService.addUsuario(this.userInfo);
    });
  }
}
