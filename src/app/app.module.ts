import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { OlMapsModule } from './ol-maps/ol-maps.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { Interseccion2Component } from './components/interseccion2/interseccion2.component';
import { Interseccion3Component } from './components/interseccion3/interseccion3.component';

// Material
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { Interseccion1Component } from './components/interseccion1/interseccion1.component';
import { MatProgressBarModule } from '@angular/material/progress-bar';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    Interseccion1Component,
    Interseccion2Component,
    Interseccion3Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    OlMapsModule,
    BrowserAnimationsModule,    
    MatToolbarModule,
    MatCardModule,
    MatButtonModule,
    MatProgressBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
