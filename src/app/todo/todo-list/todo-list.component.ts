import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd, NavigationStart, Event } from '@angular/router';
@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  constructor(private router: Router) {   }

  ngOnInit(): void {
  }

}
