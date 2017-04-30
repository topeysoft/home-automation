import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { InlineSVGModule } from 'ng-inline-svg';

import { AppComponent } from './app.component';
import { TSC_SERVICES } from "services/services.module";
import { TSC_COMPONENTS } from "app/compnents.module";

@NgModule({
  declarations: [
    AppComponent
    ,...TSC_COMPONENTS    
  ],
  entryComponents:[
    ...TSC_COMPONENTS
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    InlineSVGModule
  ],
  schemas:[
    CUSTOM_ELEMENTS_SCHEMA
  ],
  providers: [
    ...TSC_SERVICES
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
