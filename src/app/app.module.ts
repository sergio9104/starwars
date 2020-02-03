import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { PeliculasComponent } from './peliculas/peliculas.component';
import { PersonajesComponent} from './personajes/personajes.component';
import { ListasComponent } from './listas/listas.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatCardModule, MatButtonModule, MatGridListModule, MatToolbarModule, MatInputModule, MatFormFieldModule} from '@angular/material';
import { FormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { MatDialogModule } from '@angular/material/dialog';
import { DialogPesonajesComponent } from './dialog/dialog-pesonajes/dialog-pesonajes.component';

@NgModule({
  declarations: [
    AppComponent,
    PeliculasComponent,
    PersonajesComponent,
    ListasComponent,
    DialogPesonajesComponent,
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
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    Ng2SearchPipeModule,
    MatDialogModule,
  ],
    exports: [
      DialogPesonajesComponent,
    ],
  entryComponents: [
    DialogPesonajesComponent
  ],


  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
