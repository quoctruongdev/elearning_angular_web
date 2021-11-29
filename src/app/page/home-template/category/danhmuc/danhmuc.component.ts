import { DataService } from 'src/app/_core/services/data.service';
import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-danhmuc',
  templateUrl: './danhmuc.component.html',
  styleUrls: ['./danhmuc.component.scss'],
})
export class DanhmucComponent implements OnInit {
  @Input() danhmucData: any;
  constructor(private dataService: DataService, private router: Router) {}
  localStorage: any = localStorage.getItem('User');
  taiKhoan: any = JSON.parse(this.localStorage);

  ngOnInit(): void {}

  dangKyKhoaHoc() {
    if (!this.taiKhoan) {
      alert('vui lòng đăng nhập tài khoản');
      this.router.navigate(['/auth']);
    }
    const thongtin = {
      maKhoaHoc: this.danhmucData.maKhoaHoc,
      taiKhoan: this.taiKhoan.taiKhoan,
    };
    
    this.dataService
      .postCourse(thongtin, 'QuanLyKhoaHoc/GhiDanhKhoaHoc')
      .subscribe((result: any) => {
        alert(' Đăng ký khóa học thành công');
        console.log(result);
      });
  }
}
