import { Component, OnInit } from '@angular/core';
import {NgbTabsetConfig} from '@ng-bootstrap/ng-bootstrap';
import {Router} from '@angular/router';
import {IOption} from 'ng-select';
import {SolicitudesService} from '../../services/solicitudes.service';

@Component({
  selector: 'app-solicitud',
  templateUrl: './solicitud.component.html',
  styleUrls: ['./solicitud.component.scss']
})
export class SolicitudComponent implements OnInit {
  public tipoDropdown: Array<IOption> = [
    {label: 'Jubilado', value: 'jubilado'},
    {label: 'Pensionado', value: 'pensionado'}
  ];
  public periodoDropdown: Array<IOption> = [
    {label: 'Meses', value: 'meses'},
    {label: 'Quincenas', value: 'quincenas'}
  ];
  public plazoDropdown: Array<IOption> = [
    {label: '12', value: '12'},
    {label: '18', value: '12'},
    {label: '24', value: '12'},
    {label: '26', value: '12'},
    {label: '36', value: '12'},
    {label: '39', value: '12'},
    {label: '48', value: '12'},
    {label: '52', value: '12'},
    {label: '60', value: '12'},
    {label: '65', value: '12'},
    {label: '72', value: '12'},
    {label: '78', value: '12'},
    {label: '96', value: '12'},
    {label: '120', value: '12'}
  ];
  public productoDropdown: Array<IOption> = [
    {label: 'Pensionado', value: 'pensionado'},
    {label: 'Jubilado', value: 'jubilado'}
  ];
  public generoDropdown: Array<IOption> = [
    {label: 'Masculino', value: 'masculino'},
    {label: 'Femenino', value: 'femenino'}
  ];
  public eCivilDropdown: Array<IOption> = [
    {label: 'Soltero', value: 'soltero'},
    {label: 'Casado', value: 'casado'},
    {label: 'Divorsiado', value: 'divorsiado'},
    {label: 'Viudo', value: 'viudo'}
  ];
  public solicitudModel = {
    estado: '',
    origen: '',
    fCreacion: '',
    fechaSolicitud: '',
    fechaSolCom: '',
    tipo: '',
    periodo: '',
    plazo: '',
    montoSol: '',
    descuento: '',
    pagare: '',
    producto: '',
    nss: '',
    matricula: '',
    grupo: '',
    dependencia: '',
    tasaMensual: '',
    tasaAnual: '',
    cat: '',
    primerPago: '',
    ultimo: '',
    liquidoBase: '',
    capacidadPago: '',
    montoDeducciones: '',
    terminoDeducciones: '',
    financiera: '',
    financieraProducto: '',
    convenio: '',
    nombre: '',
    paterno: '',
    materno: '',
    rfc: '',
    curp: '',
    genero: '',
    ecivil: '',
    fNacimiento: '',
    edad: '',
    paisNacimiento: '',
    entidadNacimiento: '',
    nacionalidad: '',
    ife: '',
    domicilio: '',
    noInterior: '',
    noExterior: '',
    colonia: '',
    municipio: '',
    entidad: '',
    pais: '',
    entreCalles: '',
    correo: '',
    celular: '',
    telefono: '',
    puesto: '',
    antiguedad: '',
    ingreso: '',
    ref1Nombre: '',
    ref1Paterno: '',
    ref1Materno: '',
    ref1Tel: '',
    ref1Parentesco: '',
    ref2Nombre: '',
    ref2Paterno: '',
    ref2Materno: '',
    ref2Tel: '',
    ref2Parentesco: '',
    clabe: '',
    banco: '',
    notas: '',
    informePago: '',
    tarjeton1: '',
    tarjeton2: '',
    identificacion: '',
    estadoCuenta: '',
    guiaEnvio: '',
    listaNominal: '',
    solicitudFirmar: '',
    tablaAmortizacion: ''
  };
  constructor(private config: NgbTabsetConfig, private router: Router, private solicitudService: SolicitudesService) {
    this.config.justify = 'center';
    this.config.type = 'pills';
  }
  onCancelar() {
    this.router.navigate(['/home/solicitudes']);
  }
  ngOnInit() {
  }
  onTipoSelected(event) {
    this.solicitudModel.tipo = event.value;
  }
  onPeriodoSelected(event) {
    this.solicitudModel.periodo = event.value;
  }
  onPlazoSelected(event) {
    this.solicitudModel.plazo = event.value;
  }
  onProductoSelected(event) {
    this.solicitudModel.producto = event.value;
  }
  onGeneroSelected(event) {
    this.solicitudModel.genero = event.value;
  }
  onECivilSelected(event) {
    this.solicitudModel.ecivil = event.value;
  }

  onGuardar() {
    this.solicitudService.addSolicitante(this.solicitudModel).then(() => {
      this.router.navigate(['/home/solicitudes']);
    })
  }
}
