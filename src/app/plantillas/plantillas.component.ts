import { Component, OnInit } from '@angular/core';
import { NgbTabsetConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-plantillas',
  templateUrl: './plantillas.component.html',
  styleUrls: ['./plantillas.component.scss']
})
export class PlantillasComponent implements OnInit {

  constructor(private config: NgbTabsetConfig) {
    this.config.justify = 'center';
    this.config.type = 'pills';
  }

  ngOnInit() { }

}
