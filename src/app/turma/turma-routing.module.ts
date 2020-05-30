import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TurmaPage } from './turma.page';
import { TurmaFormComponent } from './turma-form/turma-form.component';

const routes: Routes = [
  {
    path: '',
    component: TurmaPage,
  },
  {
    path: 'criar',
    component: TurmaFormComponent,
  },
  {
    path: 'editar/:id',
    component: TurmaFormComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TurmaPageRoutingModule {}
