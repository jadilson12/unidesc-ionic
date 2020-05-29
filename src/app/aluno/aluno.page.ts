import { Aluno } from './../models/aluno.model';
import { AlunoService } from './../services/aluno.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aluno',
  templateUrl: './aluno.page.html',
  styleUrls: ['./aluno.page.scss'],
})
export class AlunoPage implements OnInit {
  alunos: Aluno[] = [];

  constructor(private readonly alunoService: AlunoService) {}

  ngOnInit() {
    this.list();
  }

  list(): void {
    this.alunoService.list().subscribe((res) => {
      this.alunos = res;
    });
  }

  delete(aluno: Aluno): void {
    //
  }
}
