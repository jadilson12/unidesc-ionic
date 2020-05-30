import { AlunoCriarComponent } from './aluno-criar/aluno-criar.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AlunoPage } from './aluno.page';

const routes: Routes = [
  {
    path: '',
    component: AlunoPage,
  },
  {
    path: 'criar',
    component: AlunoCriarComponent,
  },
  {
    path: 'editar/:id',
    component: AlunoCriarComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AlunoPageRoutingModule {}
