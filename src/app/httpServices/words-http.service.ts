import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Word} from '../Model/word';
import {HttpService} from './http.service';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WordsHttpService extends HttpService{

  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) {
    super();
  }

  public getAll(): Observable<Word[]> {
    return this.http.get<Word[]>( `${this.apiServerUrl}/words` );
    // return this.http.get<Word[]>( 'http://localhost:8080/words' );
  }

  public save(word: Word): Observable<any> {
    return this.http.post<Word>( '${apiServerUrl}/words', word );
  }
}

