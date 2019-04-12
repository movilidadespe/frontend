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




@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
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
  ]
})

export class AdminLayoutModule {}
