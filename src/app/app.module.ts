// Environment
import { environment } from '../environments/environment';

// Dependency Modules
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { SelectModule } from 'ng-select';

// Internal modules
import { AppRoutingModule } from './app-routing.module';
import { LoggedInGuard } from './services/logged-in.guard';
import { SidebarModule } from 'ng-sidebar';
import { Ng2TableModule } from 'ng2-table/ng2-table';

// Pages - Components
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { SolicitudesComponent } from './solicitudes/solicitudes.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SolicitudesTablaComponent } from './solicitudes/solicitudes-tabla/solicitudes-tabla.component';
import { ProductosConveniosComponent } from './productos-convenios/productos-convenios.component';
import { ProductosConveniosTablaComponent } from './productos-convenios/productos-convenios-tabla/productos-convenios-tabla.component';
import { SolicitantesComponent } from './solicitantes/solicitantes.component';
import { SolicitantesTablaComponent } from './solicitantes/solicitantes-tabla/solicitantes-tabla.component';
import { PlantillasComponent } from './plantillas/plantillas.component';
import { PlantillasTablaComponent } from './plantillas/plantillas-tabla/plantillas-tabla.component';
import { ReportesComponent } from './reportes/reportes.component';
import { ReporteFinancieroComponent } from './reportes/reporte-financiero/reporte-financiero.component';
import { ReporteComisionesComponent } from './reportes/reporte-comisiones/reporte-comisiones.component';
import { ReporteSolicitudesComponent } from './reportes/reporte-solicitudes/reporte-solicitudes.component';
import { ReporteSolicitantesComponent } from './reportes/reporte-solicitantes/reporte-solicitantes.component';
import { SolicitarCreditoComponent } from './solicitar-credito/solicitar-credito.component';
import { CotizacionInicialComponent } from './cotizacion-inicial/cotizacion-inicial.component';
import { CotizacionInicialTablaComponent } from './cotizacion-inicial/cotizacion-inicial-tabla/cotizacion-inicial-tabla.component';
import { RecotizacionInicialComponent } from './recotizacion-inicial/recotizacion-inicial.component';
import { RecotizacionInicialTablaComponent } from './recotizacion-inicial/recotizacion-inicial-tabla/recotizacion-inicial-tabla.component';
import { CompraDeudaComponent } from './compra-deuda/compra-deuda.component';
import { MensajesComponent } from './plantillas/mensajes/mensajes.component';
import { CorreosComponent } from './plantillas/correos/correos.component';


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
    ProductosConveniosTablaComponent,
    SolicitantesComponent,
    SolicitantesTablaComponent,
    PlantillasComponent,
    PlantillasTablaComponent,
    ReportesComponent,
    ReporteFinancieroComponent,
    ReporteComisionesComponent,
    ReporteSolicitudesComponent,
    ReporteSolicitantesComponent,
    SolicitarCreditoComponent,
    CotizacionInicialComponent,
    CotizacionInicialTablaComponent,
    RecotizacionInicialComponent,
    RecotizacionInicialTablaComponent,
    CompraDeudaComponent,
    MensajesComponent,
    CorreosComponent
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
    NgbModule,
    SelectModule

  ],
  providers: [LoggedInGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
