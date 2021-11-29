import { DataService } from 'src/app/_core/services/data.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar-home',
  templateUrl: './navbar-home.component.html',
  styleUrls: ['./navbar-home.component.scss'],
})
export class NavbarHomeComponent implements OnInit {
  constructor(private dataMenuCourse: DataService, private router: Router) {}
  danhMucKhoaHoc: any = [];
  valueSearchInput: any = '';
  checkLogin: boolean = true;
  checkLogin1: boolean = false;
  getLocal: any = [];
  user: any = [];
  ngOnInit(): void {
    this.getMenuCourse();
    this.checkLog();
  }
  checkOut() {
    localStorage.removeItem('UserAdmin');
    localStorage.removeItem('User');
    localStorage.removeItem('exp');
  }
  checkLog() {
    this.getLocal = localStorage.getItem('User');
    this.user = JSON.parse(this.getLocal);
    
    if (!this.user) {
      this.checkLogin = false;
      this.checkLogin1 = true;
    }
  }
  getMenuCourse() {
    this.dataMenuCourse
      .get('QuanLyKhoaHoc/LayDanhMucKhoaHoc')
      .subscribe((result) => {
        this.danhMucKhoaHoc = result;
      });
  }
}
