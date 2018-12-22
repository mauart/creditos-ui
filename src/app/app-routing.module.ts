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

const routes: Routes = [
  { path: '', component: HomeComponent, canActivate: [ LoggedInGuard ] },
  { path: 'home', component: HomeComponent, canActivate: [ LoggedInGuard ], children: [
      { path: 'solicitudes', component: SolicitudesComponent, canActivateChild: [ LoggedInGuard ] },
      { path: 'solicitantes', component: SolicitantesComponent, canActivateChild: [ LoggedInGuard ] },
      { path: 'usuarios', component: UsuariosComponent, canActivateChild: [ LoggedInGuard ] },
      { path: 'prod-conv', component: ProductosConveniosComponent, canActivateChild: [ LoggedInGuard ] },
      { path: 'plantillas', component: PlantillasComponent, canActivateChild: [ LoggedInGuard ] },
      { path: 'reportes', component: ReportesComponent, canActivateChild: [ LoggedInGuard ] }
    ]
  },
  { path: 'dmz/solicitarCredito', component: SolicitarCreditoComponent },
  { path: 'dmz/cotizacionInicial', component: CotizacionInicialComponent },
  { path: 'signin', component: SignInComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true, preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
