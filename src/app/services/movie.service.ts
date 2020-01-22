import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  private baseURL: any;

  constructor(private http: HttpClient
    ) {
    this.baseURL = environment.apiurl + 'films/';
  }

  public async getMovies(): Promise<any> {
    return await this.http.get<any>(`${this.baseURL}`).toPromise();
  }

}
