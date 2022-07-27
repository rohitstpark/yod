import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
 public respoosiveClass = false;
 isMunuToggle: boolean = false;

 constructor() { }

  ngOnInit(): void {

  }

  toggle(){
    this.respoosiveClass = !this.respoosiveClass;
    console.log(this.respoosiveClass);
  }

  menuToggle() {
    this.isMunuToggle = !this.isMunuToggle;
}  

}
