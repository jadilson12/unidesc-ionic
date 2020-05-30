import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { httpOptions } from '../config/httpOption';
import { Turma } from '../models/turma.model';

@Injectable({
  providedIn: 'root',
})
export class TurmaService {
  url = `${environment.api}/turmas`;
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

  create(turma: Turma): Observable<any> {
    return this.http.post(this.url, turma, httpOptions);
  }

  show(id: number): Observable<any> {
    return this.http.get(`${this.url}/${id}`);
  }

  update(turma: Turma): Observable<Turma> | any {
    return this.http.put(`${this.url}/${turma.id}`, turma, httpOptions);
  }

  delete(id: number): Observable<{}> {
    return this.http.delete(`${this.url}/${id}`, httpOptions);
  }
}
