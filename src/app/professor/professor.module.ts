import { ToastService } from './../services/toast.service';
import { ProfessorFormComponent } from './professor-form/professor-form.component';
import { ProfessorService } from './../services/professor.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProfessorPageRoutingModule } from './professor-routing.module';

import { ProfessorPage } from './professor.page';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [ProfessorPage, ProfessorFormComponent],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProfessorPageRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule,
  ],
  providers: [ProfessorService, ToastService],
})
export class ProfessorPageModule {}
