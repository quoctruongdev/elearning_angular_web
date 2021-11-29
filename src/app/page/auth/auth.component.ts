import { DataService } from 'src/app/_core/services/data.service';
import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { Location } from '@angular/common';
@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent implements OnInit {
  
  constructor(
    private userAuth: DataService,
    private router: Router,
    private location: Location
  ) {}
  TIME_EXP: number = 3600000;

  ngOnInit(): void {
    this.checkLogin();
   
  }
  checkLogin() {
    if (localStorage.getItem('User')) {
      this.router.navigate(['/']);
    }
  }

  login(user: any) {
 
    this.userAuth
      .post('QuanLyNguoiDung/DangNhap', user)
      .subscribe((result: any) => {
        
        if (result.maLoaiNguoiDung === 'GV') {
          const expiry: any = new Date().getTime() + this.TIME_EXP;

          localStorage.setItem('exp', expiry);

          localStorage.setItem('UserAdmin', JSON.stringify(result));
          localStorage.setItem('User', JSON.stringify(result));

          alert('Đăng nhập thành công');
          this.router.navigate(['/admin/dashboard']);
          return;
        }
        if (result.maLoaiNguoiDung === 'HV') {
          const expiry: any = new Date().getTime() + this.TIME_EXP;

          localStorage.setItem('exp', expiry);

          localStorage.setItem('User', JSON.stringify(result));

          alert('Đăng nhập thành công');
          this.location.back();
          return;
        } else {
          return alert('Tài khoản hoặc mật khẩu chưa đúng');
        }
      });
  }
}
