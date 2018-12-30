import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoggedInGuard } from './services/logged-in.guard';
import { SignInComponent } from './sign-in/sign-in.component';
import { SolicitudesComponent } from './solicitudes/solicitudes.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { ProductosConveniosComponent } from './productos-convenios/productos-convenios.component';
import { SolicitantesComponent } from './solicitantes/solicitantes.component';
import { PlantillasComponent } from './plantillas/plantillas.component';
import { ReportesComponent } from './reportes/reportes.component';
import { SolicitarCreditoComponent } from './solicitar-credito/solicitar-credito.component';
import { CotizacionInicialComponent } from './cotizacion-inicial/cotizacion-inicial.component';
import { RecotizacionInicialComponent } from './recotizacion-inicial/recotizacion-inicial.component';
import {CompraDeudaComponent} from './compra-deuda/compra-deuda.component';
import {MensajesComponent} from './plantillas/mensajes/mensajes.component';
import {CorreosComponent} from './plantillas/correos/correos.component';
import {SolicitudComponent} from './solicitudes/solicitud/solicitud.component';
import {UsuarioComponent} from './usuarios/usuario/usuario.component';
import {SolicitanteComponent} from './solicitantes/solicitante/solicitante.component';

const routes: Routes = [
  { path: '', component: HomeComponent, canActivate: [ LoggedInGuard ] },
  { path: 'home', component: HomeComponent, canActivate: [ LoggedInGuard ], children: [
      { path: 'solicitudes', component: SolicitudesComponent, canActivateChild: [ LoggedInGuard ] },
      { path: 'solicitudes/solicitud', component: SolicitudComponent, canActivateChild: [ LoggedInGuard ] },
      { path: 'solicitantes', component: SolicitantesComponent, canActivateChild: [ LoggedInGuard ] },
      { path: 'solicitantes/solicitante', component: SolicitanteComponent, canActivateChild: [ LoggedInGuard ] },
      { path: 'usuarios', component: UsuariosComponent, canActivateChild: [ LoggedInGuard ] },
      { path: 'usuarios/usuario', component: UsuarioComponent, canActivateChild: [ LoggedInGuard ] },
      { path: 'prod-conv', component: ProductosConveniosComponent, canActivateChild: [ LoggedInGuard ] },
      { path: 'plantillas', component: PlantillasComponent, canActivateChild: [ LoggedInGuard ] },
      { path: 'plantilla/mensaje', component: MensajesComponent, canActivateChild: [ LoggedInGuard ] },
      { path: 'plantilla/correo', component: CorreosComponent, canActivateChild: [ LoggedInGuard ] },
      { path: 'reportes', component: ReportesComponent, canActivateChild: [ LoggedInGuard ] }
    ]
  },
  { path: 'dmz/solicitarCredito', component: SolicitarCreditoComponent },
  { path: 'dmz/cotizacionInicial', component: CotizacionInicialComponent },
  { path: 'dmz/reCotizacionInicial', component: RecotizacionInicialComponent },
  { path: 'dmz/compraDeuda', component: CompraDeudaComponent },
  { path: 'signin', component: SignInComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true, preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
