import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { DialogPesonajesComponent } from '../dialog/dialog-pesonajes/dialog-pesonajes.component';
import { Route } from '@angular/compiler/src/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from '../services/movie.service';
import { CharactersService } from '../services/characters.service';


@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.scss']
})
export class PersonajesComponent implements OnInit {

  public movieId:any;
  public listCharacters: any;
  public characters: any[] = [];
  private paramsObservable: any;


  constructor(
    private dialog: MatDialog,
    private route: ActivatedRoute,
    private _movieService: MovieService,
    private _charactersService: CharactersService
    ) { 

    this.paramsObservable = this.route.params.subscribe(async (params: any) => {
      this.movieId = params.id;
    });

  }

  async ngOnInit() {
    await this._movieService.getMovie(this.movieId).then((response)=> {
      this.listCharacters = response.characters;
      this.loadCharacters();
    });
  }

  loadCharacters(){

    this.listCharacters.forEach(character => {
      this._charactersService.getCharacter(character).then((reponse) => {
        this.characters.push(reponse);
      });
    });

    console.log(this.characters);

  }

  openDialog(character): void {
    const dialogRef = this.dialog.open(DialogPesonajesComponent, {
      width: '600px',
      data: character
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');

    });
  }

}