import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {
    path: 'home',
    loadChildren: () =>
      import('./home/home.module').then((m) => m.HomePageModule),
  },
  {
    path: 'aluno',
    loadChildren: () =>
      import('./aluno/aluno.module').then((m) => m.AlunoPageModule),
  },
  {
    path: 'turma',
    loadChildren: () =>
      import('./turma/turma.module').then((m) => m.TurmaPageModule),
  },
  {
    path: 'professor',
    loadChildren: () =>
      import('./professor/professor.module').then((m) => m.ProfessorPageModule),
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./login/login.module').then((m) => m.LoginPageModule),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
