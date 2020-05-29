import { Professor } from './../models/professor.model';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { httpOptions } from '../config/httpOption';

@Injectable({
  providedIn: 'root',
})
export class ProfessorService {
  url = `${environment.api_jadilson}/profesores`;

  constructor(private readonly http: HttpClient) {}

  list(): Observable<any> {
    return this.http.get(this.url);
  }

  create(professor: Professor): Observable<any> {
    return this.http.post(this.url, professor, httpOptions);
  }

  update(professor: Professor): Observable<Professor> | any {
    return this.http.put(`${this.url}`, professor, httpOptions);
  }

  delete(id: number): Observable<{}> {
    return this.http.delete(`${this.url}/${id}`, httpOptions);
  }
}
