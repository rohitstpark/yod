import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { BudgetRoutingModule } from './budget-routing.module';
import { BudgetListComponent } from './budget-list/budget-list.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    BudgetListComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    BudgetRoutingModule,
    SharedModule
  ]
})
export class BudgetModule { }
