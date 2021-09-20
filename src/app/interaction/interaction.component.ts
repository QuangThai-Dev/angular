import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interaction',
  templateUrl: './interaction.component.html',
  styleUrls: ['./interaction.component.scss'],
})
export class InteractionComponent implements OnInit {
  fullName = 'Vo Quang Thai';
  age = 20;

  account = {
    username: 'thaivq',
    email: 'thaivq@gmail.com',
    role: true,
  };

  listAccount = [
    {
      id: 1,
      taiKhoan: '123@admin',
      hoTen: 'admin hoang anh',
      email: 'chaossasxzssc@gmail.com',
      soDt: '0969010621',
      matKhau: '1231231',
      maLoaiNguoiDung: 'KhachHang',
    },
    {
      id: 2,
      taiKhoan: '1233211',
      hoTen: 'Dhndsnsa',
      email: 'Hdjsajdjda@gmail.com',
      soDt: '1111111225',
      matKhau: '1111111',
      maLoaiNguoiDung: 'KhachHang',
    },
    {
      id: 3,
      taiKhoan: '1234',
      hoTen: 'string',
      email: 'string@gmail.com',
      soDt: '1111122116',
      matKhau: '1111w123321',
      maLoaiNguoiDung: 'KhachHang',
    },
    {
      id: 4,
      taiKhoan: '1234a',
      hoTen: '123a',
      email: '1234a@gmail.com',
      soDt: '4657893',
      matKhau: '1234a345678',
      maLoaiNguoiDung: 'QuanTri',
    },
    {
      id: 5,
      taiKhoan: '123t123',
      hoTen: 'ducbede123',
      email: '123t@gmail.com',
      soDt: '0901250813',
      matKhau: '123456',
      maLoaiNguoiDung: 'KhachHang',
    },
  ];

  constructor() {}

  ngOnInit(): void {}

  deleteAccount(id: number) {
    // console.log(id);
    const idx = this.listAccount.findIndex(account => account.id === id);
    if(idx !== -1){
      this.listAccount.splice(idx,1)
    }
  }
}
