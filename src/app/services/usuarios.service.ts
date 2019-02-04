
import { Injectable } from '@angular/core';
import {
  AngularFirestoreDocument,
  AngularFirestore,
  AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  tasks: AngularFirestoreCollection<{
    nombre: string,
    tipo: string,
    activo: string,
    usuario: string,
    rango: string,
    fInicio: Date,
    fFin: Date,
    sucursal: string,
    tMovil: string,
    tFijo: string,
    email: string,
    direccion: string,
    colonia: string,
    ciudad: string,
    estado: string,
    cp: string
  }>;

  private taskDoc: AngularFirestoreDocument<{
    nombre: string,
    tipo: string,
    activo: string,
    usuario: string,
    rango: string,
    fInicio: Date,
    fFin: Date,
    sucursal: string,
    tMovil: string,
    tFijo: string,
    email: string,
    direccion: string,
    colonia: string,
    ciudad: string,
    estado: string,
    cp: string
  }>;

  todo$: Observable<any[]>;


  constructor(private db: AngularFirestore) {
    this.tasks = this.db.collection<{
      nombre: string,
      tipo: string,
      activo: string,
      usuario: string,
      rango: string,
      fInicio: Date,
      fFin: Date,
      sucursal: string,
      tMovil: string,
      tFijo: string,
      email: string,
      direccion: string,
      colonia: string,
      ciudad: string,
      estado: string,
      cp: string
    }>('usuarios');
    this.todo$ = this.tasks.valueChanges();
  }
  addUsuario(usuario) {
    const usuarioCopy: {
      nombre: string,
      tipo: string,
      activo: string,
      usuario: string,
      rango: string,
      fInicio: Date,
      fFin: Date,
      sucursal: string,
      tMovil: string,
      tFijo: string,
      email: string,
      direccion: string,
      colonia: string,
      ciudad: string,
      estado: string,
      cp: string
    } = { ...usuario };
    return this.tasks.add(usuarioCopy);
  }
  getUsuarios() {
    return this.tasks.valueChanges();
  }
}
