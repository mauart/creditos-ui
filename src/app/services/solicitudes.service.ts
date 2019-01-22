
import { Injectable } from '@angular/core';
import {
  AngularFirestoreDocument,
  AngularFirestore,
  AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs';

export interface SolicitudesModel {
  estado: string,
  origen: string,
  fCreacion: string,
  fechaSolicitud: string,
  fechaSolCom: string,
  tipo: string,
  periodo: string,
  plazo: string,
  montoSol: string,
  descuento: string,
  pagare: string,
  producto: string,
  nss: string,
  matricula: string,
  grupo: string,
  dependencia: string,
  tasaMensual: string,
  tasaAnual: string,
  cat: string,
  primerPago: string,
  ultimo: string,
  liquidoBase: string,
  capacidadPago: string,
  montoDeducciones: string,
  terminoDeducciones: string,
  financiera: string,
  financieraProducto: string,
  convenio: string,
  nombre: string,
  paterno: string,
  materno: string,
  rfc: string,
  curp: string,
  genero: string,
  ecivil: string,
  fNacimiento: string,
  edad: string,
  paisNacimiento: string,
  entidadNacimiento: string,
  nacionalidad: string,
  ife: string,
  domicilio: string,
  noInterior: string,
  noExterior: string,
  colonia: string,
  municipio: string,
  entidad: string,
  pais: string,
  entreCalles: string,
  correo: string,
  celular: string,
  telefono: string,
  puesto: string,
  antiguedad: string,
  ingreso: string,
  ref1Nombre: string,
  ref1Paterno: string,
  ref1Materno: string,
  ref1Tel: string,
  ref1Parentesco: string,
  ref2Nombre: string,
  ref2Paterno: string,
  ref2Materno: string,
  ref2Tel: string,
  ref2Parentesco: string,
  clabe: string,
  banco: string,
  notas: string,
  informePago: string,
  tarjeton1: string,
  tarjeton2: string,
  identificacion: string,
  estadoCuenta: string,
  guiaEnvio: string,
  listaNominal: string,
  solicitudFirmar: string,
  tablaAmortizacion: string,
  creacion?: string
}

@Injectable({
  providedIn: 'root'
})
export class SolicitudesService {
  solicitudes: AngularFirestoreCollection<SolicitudesModel>;
  private solicitudesDoc: AngularFirestoreDocument<SolicitudesModel>;
  solicitudesTodo$: Observable<any[]>;

  constructor(private db: AngularFirestore) {
    this.solicitudes = this.db.collection<SolicitudesModel>('solicitudes');
    this.solicitudesTodo$ = this.solicitudes.valueChanges();
  }

  addSolicitante(solicitudes: SolicitudesModel) {
    const tempSolicitante = { ...solicitudes };
    tempSolicitante.creacion = new Date().toLocaleDateString();
    return this.solicitudes.add(tempSolicitante);
  }
}
