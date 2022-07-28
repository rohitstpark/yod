import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'todo',
    loadChildren: () =>
      import('./todo/todo.module').then((mod) => mod.TodoModule),
  },
  {
    path: 'budget',
    loadChildren: () =>
      import('./budget/budget.module').then((mod) => mod.BudgetModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
