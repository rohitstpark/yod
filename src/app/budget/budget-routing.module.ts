import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BudgetListComponent } from './budget-list/budget-list.component';

const routes: Routes = [
  { path: '', component: BudgetListComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BudgetRoutingModule { }
