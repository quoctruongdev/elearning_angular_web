import { DataService } from 'src/app/_core/services/data.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-detail-course',
  templateUrl: './detail-course.component.html',
  styleUrls: ['./detail-course.component.scss'],
})
export class DetailCourseComponent implements OnInit {
  constructor(
    private activatedRoute: ActivatedRoute,
    private data: DataService,
    private router: Router
  ) {}
  id: any;
  dataService: any;
  localStorage: any = localStorage.getItem('User');
  taiKhoan: any = JSON.parse(this.localStorage);
  param: any;
  ngOnInit(): void {
    this.getParamsFromUrl();
    this.getDetailCourse();
  }
  getParamsFromUrl() {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    

    this.activatedRoute.queryParams.subscribe((value: any) => {
      this.param = value;
      // console.log(value);
    });
  }
  getDetailCourse() {
    this.data
      .get(`QuanLyKhoaHoc/LayThongTinKhoaHoc?maKhoaHoc=${this.id}`)
      .subscribe((result: any) => {
        this.dataService = result;
        
      });
  }

  detailDangKy() {
    if (!this.taiKhoan) {
      alert('vui lòng đăng nhập tài khoản');
      this.router.navigate(['/auth']);
    }
   

    const thongtin = {
      maKhoaHoc: this.param.maKhoaHoc,
      taiKhoan: this.taiKhoan.taiKhoan,
    };

    this.data
      .postCourse(thongtin, 'QuanLyKhoaHoc/GhiDanhKhoaHoc')
      .subscribe((result: any) => {
        alert(' Đăng ký khóa học thành công');
        
      });
  }
}
