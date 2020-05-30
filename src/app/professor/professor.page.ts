import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Professor } from '../models/professor.model';
import { ProfessorService } from '../services/professor.service';
import { Router } from '@angular/router';
import { ToastService } from '../services/toast.service';

@Component({
  selector: 'app-professor',
  templateUrl: './professor.page.html',
  styleUrls: ['./professor.page.scss'],
})
export class ProfessorPage implements OnInit {
  professores$: Observable<Professor>;
  constructor(
    private readonly professorService: ProfessorService,
    private router: Router,
    private toastService: ToastService
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
    this.professorService.delete(professor.id).subscribe(
      () => {
        this.list();
        this.toastService.success('Excluido com sucesso');
      },
      () => {
        this.toastService.error('Houve um erro!');
      }
    );
  }

  edit(id: number): void {
    this.router.navigate(['/professor/editar', id]);
  }
}
