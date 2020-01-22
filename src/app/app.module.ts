import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { PeliculasComponent } from './peliculas/peliculas.component';
import { PersonajesComponent } from './personajes/personajes.component';
import { ListasComponent } from './listas/listas.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatCardModule, MatButtonModule, MatGridListModule, MatToolbarModule} from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    PeliculasComponent,
    PersonajesComponent,
    ListasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatGridListModule,
    MatToolbarModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
