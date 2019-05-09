import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';


import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';

import { AppComponent } from './app.component';

import { DashboardComponent } from './dashboard/dashboard.component';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { ConsumirService } from './service/consumir.service';

import { HttpClientModule } from '@angular/common/http';
import { RequisitosService } from './service/requisitos.service';
import {MatStepperModule} from '@angular/material/stepper';





@NgModule({
   imports: [
      BrowserAnimationsModule,
      FormsModule,
      HttpModule,
      ComponentsModule,
      HttpClientModule,
      RouterModule,
      AppRoutingModule,
      MatStepperModule
   ],
   declarations: [
      AppComponent,
      AdminLayoutComponent,
      
   ],
   providers: [
      ConsumirService,
      RequisitosService,

   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
