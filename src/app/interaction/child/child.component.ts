import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {

  @Input('fullName') myFullName:string;
  @Input('age') myAge:number;
  @Input('account') myAccount:{
    username:string,
    email:string,
    role:boolean,
  };

  @Input('listAccount') listAccount: {
    id:number;
    taiKhoan: string;
    hoTen: string;
    email: string;
    soDt: string;
    matKhau: string;
    maLoaiNguoiDung: string;
}[]

  @Output('deleteAccount') deleteAccountEmitter = new EventEmitter<number>();

  deleteAccount(id: number){
    this.deleteAccountEmitter.emit(id);
  }

  constructor() { }

  ngOnInit(): void {
    console.log(this.myFullName)
    console.log(this.listAccount)
  }

}
