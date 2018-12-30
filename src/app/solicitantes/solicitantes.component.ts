import { Component, OnInit } from '@angular/core';
import { NgbTabsetConfig } from '@ng-bootstrap/ng-bootstrap';
import {Router} from '@angular/router';
import {IOption} from 'ng-select';

@Component({
  selector: 'app-solicitantes',
  templateUrl: './solicitantes.component.html',
  styleUrls: ['./solicitantes.component.scss']
})
export class SolicitantesComponent implements OnInit {
  constructor(private config: NgbTabsetConfig, private router: Router) {
    this.config.justify = 'center';
    this.config.type = 'pills';
  }

  ngOnInit() { }

  onAgregar() {
    this.router.navigate(['/home/solicitantes/solicitante']);
  }
}
