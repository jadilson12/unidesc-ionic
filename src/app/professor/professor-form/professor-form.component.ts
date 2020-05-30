import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ProfessorService } from 'src/app/services/professor.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Professor } from 'src/app/models/professor.model';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-professor-form',
  templateUrl: './professor-form.component.html',
  styleUrls: ['./professor-form.component.scss'],
})
export class ProfessorFormComponent implements OnInit {
  form: FormGroup;
  isEdit: boolean;
  idProfessor: number;
  constructor(
    private readonly formBuilder: FormBuilder,
    private professorService: ProfessorService,
    private router: Router,
    private route: ActivatedRoute,
    private toastService: ToastService
  ) {}

  ngOnInit() {
    this.form = this.formBuilder.group({
      nome: ['', Validators.required],
      matricula: ['', Validators.required],
      email: ['', Validators.required],
      telefone: ['', Validators.required],
    });
    // tslint:disable-next-line:radix
    this.idProfessor = parseInt(this.route.snapshot.paramMap.get('id'));

    if (this.idProfessor) {
      this.show(this.idProfessor);
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

  create(professor: Professor): void {
    this.professorService.create(professor).subscribe(
      () => {
        this.router.navigate(['/professor']);
        this.professorService.emitChanges();
        this.toastService.success('Criado com sucesso');
      },
      () => {
        this.toastService.error('Houve um erro!');
      }
    );
  }

  show(id: number): void {
    this.professorService.show(id).subscribe(
      (res) => {
        this.form.patchValue(res);
      },
      (error) => {
        console.log(error);
      }
    );
  }
  update(professor: Professor): void {
    const value = professor;
    value.id = this.idProfessor;
    this.professorService.update(value).subscribe(
      () => {
        this.router.navigate(['/professor']);
        this.professorService.emitChanges();
        this.toastService.success('Atualizado com sucesso');
      },
      () => {
        this.toastService.error('Houve um erro!');
      }
    );
  }
}
