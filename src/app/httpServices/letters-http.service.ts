import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {EMPTY, Observable} from 'rxjs';
import {Letter} from '../Model/letter';
import {HttpService} from './http.service';
import {environment} from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class LettersHttpService extends HttpService {

  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) {
    super();
  }

  public getAll(): Observable<Letter[]> {
    return this.http.get<Letter[]>(`${this.apiServerUrl}/letters`);
  }

  public save(letter: Letter): Observable<Letter> {
    return  EMPTY;
  }
}
