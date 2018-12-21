import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoggedInGuard } from './services/logged-in.guard';
import { SignInComponent } from './sign-in/sign-in.component';
import { SolicitudesComponent } from './solicitudes/solicitudes.component';
import { UsuariosComponent } from './usuarios/usuarios.component';

const routes: Routes = [
  { path: '', component: HomeComponent, canActivate: [ LoggedInGuard ] },
  { path: 'home', component: HomeComponent, canActivate: [ LoggedInGuard ] },
  { path: 'solicitudes', component: SolicitudesComponent, canActivate: [ LoggedInGuard ] },
  { path: 'usuarios', component: UsuariosComponent, canActivate: [ LoggedInGuard ] },
  { path: 'signin', component: SignInComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true, preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
