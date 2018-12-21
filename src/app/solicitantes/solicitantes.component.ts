import { Component, OnInit } from '@angular/core';
import { NgbTabsetConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-solicitantes',
  templateUrl: './solicitantes.component.html',
  styleUrls: ['./solicitantes.component.scss']
})
export class SolicitantesComponent implements OnInit {

  constructor(private config: NgbTabsetConfig) {
    this.config.justify = 'center';
    this.config.type = 'pills';
  }

  ngOnInit() {
  }

}
