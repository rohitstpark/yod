import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoRoutingModule } from './todo.routing';
import { SharedModule } from '../shared/shared.module';
import { TodoListComponent } from './todo-list/todo-list.component';

@NgModule({
  declarations: [
    TodoListComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    TodoRoutingModule
  ]
})
export class TodoModule { }
