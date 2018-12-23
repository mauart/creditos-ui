import { Component, OnInit } from '@angular/core';
import {NgbTabsetConfig} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-compra-deuda',
  templateUrl: './compra-deuda.component.html',
  styleUrls: ['./compra-deuda.component.scss']
})
export class CompraDeudaComponent implements OnInit {
  public compraDeuda = {
    nombre: '',
    nss: '',
    email: '',
    tel: ''
  };
  constructor(private config: NgbTabsetConfig) {
    this.config.justify = 'center';
    this.config.type = 'pills';
  }

  ngOnInit() {
  }
  onComprarDeuda() {
    console.log(this.compraDeuda);
  }
}
