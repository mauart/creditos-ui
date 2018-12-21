import { Component, OnInit } from '@angular/core';
import { NgbTabsetConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-productos-convenios',
  templateUrl: './productos-convenios.component.html',
  styleUrls: ['./productos-convenios.component.scss']
})
export class ProductosConveniosComponent implements OnInit {

  constructor(private config: NgbTabsetConfig) {
    this.config.justify = 'center';
    this.config.type = 'pills';
  }

  ngOnInit() {
  }

}
