import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminLayoutRoutes } from './admin-layout.routing';
import { DashboardComponent } from '../../dashboard/dashboard.component';
import { IconsComponent } from '../../icons/icons.component';
import { MapsComponent } from '../../maps/maps.component';
import { LoginComponent } from 'app/login/login.component';




import {
  MatAutocompleteModule,
  MatBadgeModule,
  MatBottomSheetModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatDividerModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatStepperModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatTreeModule,
} from '@angular/material';
import { PlanesComponent } from 'app/movilidad/planes/planes.component';
import { EstanciaComponent } from 'app/movilidad/estancia/estancia.component';
import { IndexadaComponent } from 'app/movilidad/indexada/indexada.component';
import { IntercambioComponent } from 'app/movilidad/intercambio/intercambio.component';
import { ArticulosComponent } from 'app/movilidad/articulos/articulos.component';
import { GestionComponent } from 'app/movilidad/gestion/gestion.component';
import { ExternosComponent } from 'app/movilidad/externos/externos.component';
import { ConvocatoriaComponent } from 'app/convocatoria/convocatoria.component';
import { MenuComponent } from 'app/mantenimiento/menu/menu.component';
import { RequisitosComponent } from 'app/mantenimiento/requisitos/requisitos.component';
import { PlanmovilidadComponent } from 'app/mantenimiento/planmovilidad/planmovilidad.component';
import { TipomovilidadComponent } from 'app/mantenimiento/tipomovilidad/tipomovilidad.component';
import { MovsubmComponent } from 'app/mantenimiento/movsubm/movsubm.component';
import { ConvenioComponent } from 'app/mantenimiento/convenio/convenio.component';
import { ConvoComponent } from 'app/mantenimiento/convo/convo.component';
import { ConvoAddComponent } from 'app/mantenimiento/convo/convo-add/convo-add.component';
import { RequisitosAddComponent } from 'app/mantenimiento/requisitos/requisitos-add/requisitos-add.component';
import { ConvenioAddComponent } from 'app/mantenimiento/convenio/convenio-add/convenio-add.component';
import { MovsubmAddComponent } from 'app/mantenimiento/movsubm/movsubm-add/movsubm-add.component';
import { PlanmovAddComponent } from 'app/mantenimiento/planmovilidad/planmov-add/planmov-add.component';
import { TipomovilidadAddComponent } from 'app/mantenimiento/tipomovilidad/tipomovilidad-add/tipomovilidad-add.component';
import { RequisitosEditComponent } from 'app/mantenimiento/requisitos/requisitos-edit/requisitos-edit.component';
import { PlanmovEditComponent } from 'app/mantenimiento/planmovilidad/planmov-edit/planmov-edit.component';
import { TipomovilidadEditComponent } from 'app/mantenimiento/tipomovilidad/tipomovilidad-edit/tipomovilidad-edit.component';
import { MovsubmEditComponent } from 'app/mantenimiento/movsubm/movsubm-edit/movsubm-edit.component';
import { ConvenioEditComponent } from 'app/mantenimiento/convenio/convenio-edit/convenio-edit.component';
import { ConvoEditComponent } from 'app/mantenimiento/convo/convo-edit/convo-edit.component';




@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatStepperModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatTreeModule,
  ],
  declarations: [
    DashboardComponent,
    IconsComponent,
    MapsComponent,
    LoginComponent,
    EstanciaComponent,
    IntercambioComponent,
    IndexadaComponent,
    PlanesComponent,
    ArticulosComponent,
    GestionComponent,
    ExternosComponent,
    ConvocatoriaComponent,
    MenuComponent,
    RequisitosComponent,
    PlanmovilidadComponent,
    TipomovilidadComponent,
    MovsubmComponent,
    ConvenioComponent,
    ConvoComponent,
    ConvoAddComponent,
    RequisitosAddComponent,
    ConvenioAddComponent,
    MovsubmAddComponent,
    PlanmovAddComponent,
    TipomovilidadAddComponent,
   RequisitosEditComponent,
   PlanmovEditComponent,
  TipomovilidadEditComponent,
    MovsubmEditComponent,
    ConvenioEditComponent,
    ConvoEditComponent,
  ]
})

export class AdminLayoutModule {}
