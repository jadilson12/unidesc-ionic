import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Professor } from '../models/professor.model';
import { ProfessorService } from '../services/professor.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-professor',
  templateUrl: './professor.page.html',
  styleUrls: ['./professor.page.scss'],
})
export class ProfessorPage implements OnInit {
  professores$: Observable<Professor>;
  constructor(
    private readonly professorService: ProfessorService,
    private router: Router
  ) {}

  ngOnInit() {
    this.list();
    this.professorService.getChanges().subscribe(() => {
      this.list();
    });
  }

  list(): void {
    this.professores$ = this.professorService.list();
  }

  delete(professor: Professor): void {
    this.professorService.delete(professor.id).subscribe((resp) => {
      this.list();
    });
  }

  edit(id: number): void {
    this.router.navigate(['/professor/editar', id]);
  }
}
