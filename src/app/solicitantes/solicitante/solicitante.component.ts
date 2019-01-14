import { Component, OnInit } from '@angular/core';
import {IOption} from 'ng-select';
import {Router} from '@angular/router';
import {SolicitanteModel, SolicitantesService} from '../../services/solicitantes.service';

@Component({
  selector: 'app-solicitante',
  templateUrl: './solicitante.component.html',
  styleUrls: ['./solicitante.component.scss']
})
export class SolicitanteComponent implements OnInit {
  public origenDropdown: Array<IOption> = [
    {label: 'Web', value: 'web'},
    {label: 'DB', value: 'db'},
    {label: 'Cambaceo', value: 'cambaceo'}
  ];
  public tipoDropdown: Array<IOption> = [
    {label: 'Jubilado', value: 'jubilado'},
    {label: 'Pensionado', value: 'pensionado'}
  ];
  public solicitanteModel: SolicitanteModel = {
    tipo: '',
    origen: '',
    nombre: '',
    aPaterno: '',
    aMaterno: '',
    domicilio: '',
    colonia: '',
    ciudad: '',
    estado: '',
    cp: '',
    celular: '',
    correo: '',
    nss: '',
    matricula: '',
    curp: '',
    delegacion: ''
  };
  constructor(private router: Router, private solicitanteService: SolicitantesService) { }

  ngOnInit() { }

  onCancelar() {
    this.router.navigate(['/home/solicitantes']);
  }

  onTipoSelected(event) {
    this.solicitanteModel.tipo = event.value;
  }

  onOrigenSelected(event) {
    this.solicitanteModel.origen = event.value;
  }

  onGuardar() {

    this.solicitanteService.addSolicitante(this.solicitanteModel).then(() => {
      this.router.navigate(['/home/solicitantes']);
    }).catch((error) => {
      console.log(error);
    })

  }
}
