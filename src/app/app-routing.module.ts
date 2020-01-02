import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PeliculasComponent } from './peliculas/peliculas.component';
import { PersonajesComponent } from './personajes/personajes.component';


const routes: Routes = [
  { path: '', component: PeliculasComponent },
  { path: 'personajes', component: PersonajesComponent },
  { path: '**',  redirectTo: '', component: PeliculasComponent },
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
