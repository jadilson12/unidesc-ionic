import { Professor } from './../models/professor.model';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { httpOptions } from '../config/httpOption';

@Injectable({
  providedIn: 'root',
})
export class ProfessorService {
  url = `${environment.api}/professores`;
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

  create(professor: Professor): Observable<any> {
    return this.http.post(this.url, professor, httpOptions);
  }

  show(id: number): Observable<any> {
    return this.http.get(`${this.url}/${id}`);
  }

  update(professor: Professor): Observable<Professor> | any {
    return this.http.put(`${this.url}/${professor.id}`, professor, httpOptions);
  }

  delete(id: number): Observable<{}> {
    return this.http.delete(`${this.url}/${id}`, httpOptions);
  }
}
