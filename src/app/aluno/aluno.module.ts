import { AlunoService } from './../services/aluno.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AlunoPageRoutingModule } from './aluno-routing.module';

import { AlunoPage } from './aluno.page';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AlunoPage],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AlunoPageRoutingModule,
    HttpClientModule,
  ],
  providers: [AlunoService],
})
export class AlunoPageModule {}
