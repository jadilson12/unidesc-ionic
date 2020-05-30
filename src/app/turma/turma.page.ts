import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Turma } from '../models/turma.model';
import { TurmaService } from '../services/turma.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-turma',
  templateUrl: './turma.page.html',
  styleUrls: ['./turma.page.scss'],
})
export class TurmaPage implements OnInit {
  turmas$: Observable<Turma>;
  constructor(
    private readonly turmaService: TurmaService,
    private router: Router
  ) {}

  ngOnInit() {
    this.list();
    this.turmaService.getChanges().subscribe(() => {
      this.list();
    });
  }

  list(): void {
    this.turmas$ = this.turmaService.list();
  }

  delete(professor: Turma): void {
    this.turmaService.delete(professor.id).subscribe(() => {
      this.list();
    });
  }

  edit(id: number): void {
    this.router.navigate(['/turma/editar', id]);
  }
}
