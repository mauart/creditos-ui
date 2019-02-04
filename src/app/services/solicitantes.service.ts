
import { Injectable } from '@angular/core';
import {
  AngularFirestoreDocument,
  AngularFirestore,
  AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs';


export interface SolicitanteModel {
  tipo: string,
  origen: string,
  nombre: string,
  aPaterno: string,
  aMaterno: string,
  domicilio: string,
  colonia: string,
  ciudad: string,
  estado: string,
  cp: string,
  celular: string,
  correo: string,
  nss: string,
  matricula: string,
  curp: string,
  delegacion: string,
  creacion?: string
}
@Injectable({
  providedIn: 'root'
})
export class SolicitantesService {
  solicitantes: AngularFirestoreCollection<SolicitanteModel>;
  private solicitantesDoc: AngularFirestoreDocument<SolicitanteModel>;
  solicitantesTodo$: Observable<any[]>;

  constructor(private db: AngularFirestore) {
    this.solicitantes = this.db.collection<SolicitanteModel>('solicitantes');
    this.solicitantesTodo$ = this.solicitantes.valueChanges();
  }

  addSolicitante(solicitante: SolicitanteModel) {
    const tempSolicitante = { ...solicitante };
    tempSolicitante.creacion = new Date().toLocaleDateString();
    return this.solicitantes.add(tempSolicitante);
  }

  getSolicitantes() {
    return this.solicitantes.valueChanges();
  }

}
