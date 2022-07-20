import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectorRef } from '@angular/core';
import { Router, NavigationEnd, NavigationStart, Event } from '@angular/router';

@Component({
  selector: 'app-side-panel',
  templateUrl: './side-panel.component.html',
  styleUrls: ['./side-panel.component.css']
})
export class SidePanelComponent implements OnInit {
  @Output() eventPassAction = new EventEmitter();
  constructor(private router: Router) {   }

  ngOnInit(): void {
  }

  actionEvent() {
    this.eventPassAction.emit();
  }

}
