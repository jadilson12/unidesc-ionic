import { TurmaFormComponent } from './turma-form/turma-form.component';
import { TurmaService } from './../services/turma.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TurmaPageRoutingModule } from './turma-routing.module';

import { TurmaPage } from './turma.page';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TurmaPageRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule,
  ],
  declarations: [TurmaPage, TurmaFormComponent],
  providers: [TurmaService],
})
export class TurmaPageModule {}
