import { Component, OnInit } from '@angular/core';
import {IOption} from 'ng-select';
import {Router} from '@angular/router';

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
  constructor(private router: Router) { }

  ngOnInit() {
  }
  onCancelar() {
    this.router.navigate(['/home/solicitantes']);
  }
}
