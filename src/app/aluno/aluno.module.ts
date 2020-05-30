import { ToastService } from './../services/toast.service';
import { RouterModule } from '@angular/router';
import { AlunoCriarComponent } from './aluno-criar/aluno-criar.component';
import { AlunoService } from './../services/aluno.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AlunoPageRoutingModule } from './aluno-routing.module';

import { AlunoPage } from './aluno.page';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AlunoPage, AlunoCriarComponent],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AlunoPageRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule,
  ],
  providers: [AlunoService, ToastService],
})
export class AlunoPageModule {}
