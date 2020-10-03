import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormacionComponent } from './formacion/formacion.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { ExperienciaComponent } from './experiencia/experiencia.component';
import {InstitucionesModule} from '../instituciones/instituciones.module';



@NgModule({
    declarations: [FormacionComponent, ExperienciaComponent],
  exports: [
    FormacionComponent,
    ExperienciaComponent
  ],
  imports: [
    CommonModule,
    NgbModule,
    InstitucionesModule
  ]
})
export class DatosModule { }
