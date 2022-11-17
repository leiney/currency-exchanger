/**
 * @class AppModule
 * =====================================================================================
 * This is the main MODULE of the application. Only include requisite modules shared
 * across the application. Avoid including components used in specific modules only.
 * =====================================================================================
 * @author Leiney Ogeto
 */
 
import {SharedModule} from './shared/shared.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [,AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
