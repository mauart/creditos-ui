// Environment
import { environment } from '../environments/environment';

// Dependency Modules
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import {AngularFireModule} from 'angularfire2';
import {AngularFireAuthModule} from 'angularfire2/auth';
import {AngularFirestoreModule} from 'angularfire2/firestore';

// Pages - Components
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { SolicitudesComponent } from './solicitudes/solicitudes.component';
import { SignInComponent } from './sign-in/sign-in.component';

// Internal modules
import { AppRoutingModule } from './app-routing.module';
import { LoggedInGuard } from './services/logged-in.guard';
import { SidebarModule } from 'ng-sidebar';
import { Ng2TableModule } from 'ng2-table/ng2-table';
import { SolicitudesTablaComponent } from './solicitudes/solicitudes-tabla/solicitudes-tabla.component';
import { ProductosConveniosComponent } from './productos-convenios/productos-convenios.component';
import { ProductosConveniosTablaComponent } from './productos-convenios/productos-convenios-tabla/productos-convenios-tabla.component';


const config = environment.FIREBASE;
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UsuariosComponent,
    SolicitudesComponent,
    SignInComponent,
    SolicitudesTablaComponent,
    ProductosConveniosComponent,
    ProductosConveniosTablaComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(config),
    AngularFireAuthModule,
    AngularFirestoreModule,
    FormsModule,
    AppRoutingModule,
    SidebarModule.forRoot(),
    Ng2TableModule,
    NgbModule

  ],
  providers: [LoggedInGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
