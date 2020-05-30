import { ToastService } from './../services/toast.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { Aluno } from './../models/aluno.model';
import { AlunoService } from './../services/aluno.service';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-aluno',
  templateUrl: './aluno.page.html',
  styleUrls: ['./aluno.page.scss'],
})
export class AlunoPage implements OnInit, OnDestroy {
  alunos$: Observable<Aluno>;
  constructor(
    private readonly alunoService: AlunoService,
    private router: Router,
    private toastService: ToastService
  ) {}

  ngOnInit() {
    this.list();
    this.alunoService.getChanges().subscribe(() => {
      this.list();
    });
  }

  list(): void {
    this.alunos$ = this.alunoService.list();
  }

  delete(aluno: Aluno): void {
    this.alunoService.delete(aluno.id).subscribe(
      (resp) => {
        this.list();
        this.toastService.success('Excluido com sucesso');
      },
      () => {
        this.toastService.error('Houve um erro!');
      }
    );
  }

  edit(id: number): void {
    this.router.navigate(['/aluno/editar', id]);
  }

  ngOnDestroy(): void {
    //
  }
}
