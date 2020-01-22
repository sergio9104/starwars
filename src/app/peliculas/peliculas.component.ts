import { Component, OnInit } from '@angular/core';
import { MovieService } from '../services/movie.service';

@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.scss']
})
export class PeliculasComponent implements OnInit {

  public movies: any[] = [];
  public busqueda:any;
  constructor(
    private api: MovieService
  ) { }

  async ngOnInit() {
    await this.api.getMovies().then((data) =>{
      this.movies = data.results;
      console.log(data);
    })
  }

}
