import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CharactersService {

  private baseURL: any;

  constructor(private http: HttpClient
    ) {
    this.baseURL = environment.apiurl + 'people';
  }

  public async getCharacter(url:any): Promise<any> {
    return await this.http.get<any>(`${url}`).toPromise();
  }

}
