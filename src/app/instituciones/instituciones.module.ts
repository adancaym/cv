import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IpnComponent } from './ipn/ipn.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { UpiicsaComponent } from './upiicsa/upiicsa.component';



@NgModule({
    declarations: [IpnComponent, UpiicsaComponent],
  exports: [
    IpnComponent,
    UpiicsaComponent
  ],
  imports: [
    CommonModule,
    NgbModule
  ]
})
export class InstitucionesModule { }
