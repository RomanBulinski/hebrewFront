import { Injectable } from '@angular/core';
import {Word} from '../Model/word';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DBInitHttpService {

  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  // public dataBaseInit(): Observable<any> {
  //   return this.http.get<Word>( `${this.apiServerUrl}/dataBase` );
  // }

}
