import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';


import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';

import { AppComponent } from './app.component';

import { DashboardComponent } from './dashboard/dashboard.component';

import { IconsComponent } from './icons/icons.component';
import { MapsComponent } from './maps/maps.component';
import { LoginComponent } from './login/login.component';
import { EstanciaComponent } from './estancia/estancia.component';
import { IndexadaComponent } from './indexada/indexada.component';

import {
  AgmCoreModule
} from '@agm/core';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { ConsumirService } from './service/consumir.service';

import { HttpClientModule } from '@angular/common/http';
import { RequisitosService } from './service/requisitos.service';
import { EstanciaListComponent } from './estancia/estancia-list/estancia-list.component';
import { MovilidadComponent } from './movilidad/movilidad.component';
import { ConvocatoriaComponent } from './convocatoria/convocatoria.component';
import { MantenimientoComponent } from './mantenimiento/mantenimiento.component';



@NgModule({
   imports: [
      BrowserAnimationsModule,
      FormsModule,
      HttpModule,
      ComponentsModule,
      HttpClientModule,
      RouterModule,
      AppRoutingModule,
      
   ],
   

 
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    
    

  ],
  providers: [
  ConsumirService,
  RequisitosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
