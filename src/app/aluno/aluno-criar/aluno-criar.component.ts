import { ToastService } from './../../services/toast.service';
import { Aluno } from './../../models/aluno.model';
import { AlunoService } from './../../services/aluno.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-aluno-criar',
  templateUrl: './aluno-criar.component.html',
  styleUrls: ['./aluno-criar.component.scss'],
})
export class AlunoCriarComponent implements OnInit {
  form: FormGroup;
  isEdit: boolean;
  idAluno: number;
  constructor(
    private readonly formBuilder: FormBuilder,
    private alunoService: AlunoService,
    private router: Router,
    private route: ActivatedRoute,
    private toastService: ToastService
  ) {}

  ngOnInit() {
    this.form = this.formBuilder.group({
      nome: ['', Validators.required],
      matricula: ['', Validators.required],
      semestre: ['', Validators.required],
    });
    // tslint:disable-next-line:radix
    this.idAluno = parseInt(this.route.snapshot.paramMap.get('id'));

    if (this.idAluno) {
      this.show(this.idAluno);
      this.isEdit = !this.isEdit;
    }
  }

  onSubmit(): void {
    if (this.isEdit) {
      this.update(this.form.value);
    } else {
      this.create(this.form.value);
    }
  }

  create(aluno: Aluno): void {
    this.alunoService.create(aluno).subscribe(
      () => {
        this.router.navigate(['/aluno']);
        this.alunoService.emitChanges();
        this.toastService.success('Criado com sucesso');
      },
      (error) => {
        this.toastService.error('Houve um erro!');
      }
    );
  }

  show(id: number): void {
    this.alunoService.show(id).subscribe(
      (res) => {
        console.log(res);
        this.form.patchValue(res);
      },
      (error) => {
        console.log(error);
      }
    );
  }
  update(aluno: Aluno): void {
    const value = aluno;
    value.id = this.idAluno;
    this.alunoService.update(value).subscribe(
      () => {
        this.router.navigate(['/aluno']);
        this.alunoService.emitChanges();
        this.toastService.success('Atualizado com sucesso');
      },
      (error) => {
        this.toastService.error('Houve um erro!');
      }
    );
  }
}
