import { httpOptions } from './../config/httpOption';
import { Aluno } from './../models/aluno.model';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class AlunoService {
  url = `${environment.api}/alunos`;
  private changes$ = new Subject<boolean>();
  constructor(private readonly http: HttpClient) {}

  emitChanges() {
    this.changes$.next(true);
  }

  getChanges(): Observable<boolean> {
    return this.changes$.asObservable();
  }

  list(): Observable<any> {
    return this.http.get(this.url);
  }

  create(aluno: Aluno): Observable<any> {
    return this.http.post(this.url, aluno, httpOptions);
  }

  show(id: number): Observable<any> {
    return this.http.get(`${this.url}/${id}`);
  }

  update(aluno: Aluno): Observable<Aluno> | any {
    return this.http.put(`${this.url}/${aluno.id}`, aluno, httpOptions);
  }

  delete(id: number): Observable<{}> {
    return this.http.delete(`${this.url}/${id}`, httpOptions);
  }
}
