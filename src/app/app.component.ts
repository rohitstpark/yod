import { Component } from '@angular/core';
import { Router,ActivatedRoute, NavigationEnd, NavigationStart, Event } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'yod';
  public loginType:any;
  constructor(private router: Router, private location: Location, private route: ActivatedRoute) {

    console.log(this.location.path());

    if(this.location.path() == '') {
        localStorage.setItem('login', 'before_login');
    } else  {
        localStorage.setItem('login', 'after_login');
    }
  }
  ngOnInit() {
    this.loginType = localStorage.getItem('login');
  }
}
