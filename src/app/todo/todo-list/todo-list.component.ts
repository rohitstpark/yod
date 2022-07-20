import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectorRef } from '@angular/core';
import { Router, NavigationEnd, NavigationStart, Event } from '@angular/router';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  public sidePanelData = false;
  constructor(private router: Router) {   }

  ngOnInit(): void {
  }

  sidePanel(){
    this.sidePanelData = true;
  }
  closeSidePanel(){
    this.sidePanelData = false;
  }
}
