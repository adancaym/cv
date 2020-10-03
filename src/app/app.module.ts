import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app/app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {UiModule} from './ui/ui.module';
import {DatosModule} from './datos/datos.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    UiModule,
    DatosModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
