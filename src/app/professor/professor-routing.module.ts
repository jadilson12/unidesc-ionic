import { ProfessorFormComponent } from './professor-form/professor-form.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfessorPage } from './professor.page';

const routes: Routes = [
  {
    path: '',
    component: ProfessorPage,
  },
  {
    path: 'criar',
    component: ProfessorFormComponent,
  },
  {
    path: 'editar/:id',
    component: ProfessorFormComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfessorPageRoutingModule {}
