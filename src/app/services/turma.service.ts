import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { httpOptions } from '../config/httpOption';
import { Turma } from '../models/turma.model';

@Injectable({
  providedIn: 'root',
})
export class TurmaService {
  url = `${environment.api_jadilson}/turmas`;

  constructor(private readonly http: HttpClient) {}

  list(): Observable<any> {
    return this.http.get(this.url);
  }

  create(turma: Turma): Observable<any> {
    return this.http.post(this.url, turma, httpOptions);
  }

  update(turma: Turma): Observable<Turma> | any {
    return this.http.put(`${this.url}`, turma, httpOptions);
  }

  delete(id: number): Observable<{}> {
    return this.http.delete(`${this.url}/${id}`, httpOptions);
  }
}
