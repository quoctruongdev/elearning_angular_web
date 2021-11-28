import { DataService } from 'src/app/_core/services/data.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit {
  constructor(private API: DataService, private router: Router) {}
  getlocalstorgae: any = localStorage.getItem('User');
  parseUser: any = JSON.parse(this.getlocalstorgae);
  updateForm: any;
  changeInfoUser: any = [];
  User1: any;
  userListCourse: any = [];
  ngOnInit(): void {
    this.getUser();
  }
  getUser() {
    if (!this.getlocalstorgae) {
      this.router.navigate(['/']);
      alert('Vui lòng đăng nhập');
    }
  }
  changeInfo() {
    this.API.get(
      `QuanLyNguoiDung/TimKiemNguoiDung?MaNhom=${this.parseUser?.maNhom}&tuKhoa=${this.parseUser?.taiKhoan}`
    ).subscribe((user) => {
      this.changeInfoUser = user[0];

      console.log(user);
      console.log(this.changeInfoUser?.hoTen);
    });
  }
  update(updateForm: any) {
    updateForm.maNhom = 'GP01';

    this.API.put(
      'QuanLyNguoiDung/CapNhatThongTinNguoiDung',
      updateForm
    ).subscribe((putUser: any) => {
      alert('Đã sửa thành công');
      this.changeInfoUser = '';
    });
  }

  userCourseMethod() {
    const course = {
      taiKhoan: this.parseUser.taiKhoan,
    };
    this.API.post(
      'QuanLyNguoiDung/LayDanhSachKhoaHocDaXetDuyet',
      course
    ).subscribe((result: any) => {
      console.log(result);
      this.userListCourse = result;
    });
  }
  deleteCourse(deleteCourse: any) {
    const course = {
      taiKhoan: this.parseUser.taiKhoan,
      maKhoaHoc: deleteCourse,
    };
    console.log(course);
    this.API.postCourse(course, 'QuanLyKhoaHoc/HuyGhiDanh').subscribe(
      (result: any) => {
        console.log(result);
      }
    );
  }
}
