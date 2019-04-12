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
import { EstanciaCreateComponent } from './estancia/estancia-create/estancia-create.component';



@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    ComponentsModule,
    HttpClientModule,
    RouterModule,
    AppRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: 'YOUR_GOOGLE_MAPS_API_KEY'
    })
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
