import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TodoRoutingModule } from './todo.routing';
import { SharedModule } from '../shared/shared.module';
import { TodoListComponent } from './todo-list/todo-list.component';

@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    SharedModule,
    TodoRoutingModule
  ],
  declarations: [
    TodoListComponent,
  ],
})
export class TodoModule { }
