import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.scss']
})
export class DataBindingComponent implements OnInit {
  title = "Data Binding";
  fullName = "";
  tuoi = "18 tuổi"
  isMarried = false;
  users = {
    username: 'thaivq',
    email:'thaivq@gmail.com',
    role:true
  }
  imgSrc = "https://upload.wikimedia.org/wikipedia/vi/thumb/e/e0/Iron_Man_bleeding_edge.jpg/250px-Iron_Man_bleeding_edge.jpg"

  isDisabled = true;
  email = ''
  clickMe(){
    alert('Clicked!')
  }

  getEmail(event: any){
    // console.log(event.target.value)
    this.email = event.target.value;
    console.log(this.email)
  }
  getfullName(fullName:string){
    this.fullName = fullName
  }

  constructor() { }

  ngOnInit(): void {
  }

}
