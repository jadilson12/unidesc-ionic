import { httpOptions } from './../config/httpOption';
import { Aluno } from './../models/aluno.model';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class AlunoService {
  url = `${environment.api_jadilson}/alunos`;

  constructor(private readonly _http: HttpClient) {}

  list(): Observable<any> {
    return this._http.get(this.url);
  }

  create(aluno: Aluno): Observable<any> {
    return this._http.post(this.url, aluno, httpOptions);
  }

  update(aluno: Aluno): Observable<Aluno> | any {
    return this._http.put(`${this.url}`, aluno, httpOptions);
  }

  delete(id: number): Observable<{}> {
    return this._http.delete(`${this.url}/${id}`, httpOptions);
  }
}
