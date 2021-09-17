import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-structural',
  templateUrl: './structural.component.html',
  styleUrls: ['./structural.component.scss']
})
export class StructuralComponent implements OnInit {
  title = "Structural Directives"
  isLoggedIn = false;
  username = "thaivq";
  password = '123'
  age = 0;
  rappers = ['Đen Vâu','Binz','Karik','Wowy']
  constructor() { }

  login(){
    this.isLoggedIn = true;
  }
  logout(){
    this.isLoggedIn = false
}
  ngOnInit(): void {
  }

}
