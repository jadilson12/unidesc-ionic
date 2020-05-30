import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { TurmaService } from 'src/app/services/turma.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Turma } from 'src/app/models/turma.model';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-turma-form',
  templateUrl: './turma-form.component.html',
  styleUrls: ['./turma-form.component.scss'],
})
export class TurmaFormComponent implements OnInit {
  form: FormGroup;
  isEdit: boolean;
  idTurma: number;
  constructor(
    private readonly formBuilder: FormBuilder,
    private turmaService: TurmaService,
    private router: Router,
    private route: ActivatedRoute,
    private toastService: ToastService
  ) {}

  ngOnInit() {
    this.form = this.formBuilder.group({
      lider: ['', Validators.required],
      email: ['', Validators.required],
    });
    // tslint:disable-next-line:radix
    this.idTurma = parseInt(this.route.snapshot.paramMap.get('id'));

    if (this.idTurma) {
      this.show(this.idTurma);
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

  create(turma: Turma): void {
    this.turmaService.create(turma).subscribe(
      () => {
        this.router.navigate(['/turma']);
        this.turmaService.emitChanges();
        this.toastService.success('Criado com sucesso');
      },
      () => {
        this.toastService.error('Houve um erro!');
      }
    );
  }

  show(id: number): void {
    this.turmaService.show(id).subscribe(
      (res) => {
        this.form.patchValue(res);
      },
      (error) => {
        console.log(error);
      }
    );
  }
  update(turma: Turma): void {
    const value = turma;
    value.id = this.idTurma;
    this.turmaService.update(value).subscribe(
      () => {
        this.router.navigate(['/turma']);
        this.turmaService.emitChanges();
        this.toastService.success('Atualizado com sucesso');
      },
      () => {
        this.toastService.error('Houve um erro!');
      }
    );
  }
}
