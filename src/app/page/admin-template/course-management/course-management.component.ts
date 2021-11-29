import { Component, OnInit } from '@angular/core';
import { DataService } from '@services/data.service';
import { Subscription } from 'rxjs';
import { ShareDataService } from '@services/share-data.service';

@Component({
  selector: 'app-course-management',
  templateUrl: './course-management.component.html',
  styleUrls: ['./course-management.component.scss'],
})
export class CourseManagementComponent implements OnInit {
  constructor(private data: DataService, private shareData: ShareDataService) {}

  listCourse: any[] = [];
  subListCourse = new Subscription();
  page: any = 1;
  pageSize: any = 10;

  ngOnInit(): void {
    this.getCourse();
  }

  editCourse(course: any) {
    this.shareData.sharingUser(course);
    
  }

  getCourse() {
    this.subListCourse = this.data
      .get('QuanLyKhoaHoc/LayDanhSachKhoaHoc?MaNhom=GP01')
      .subscribe((result: any) => {
      
        this.listCourse = result;
      });
  }
  deleteCourse(id: any) {
    this.data
      .delete(`QuanLyKhoaHoc/XoaKhoaHoc?MaKhoaHoc=${id}`)
      .subscribe((result: any) => {
        if (result) {
          alert('Xoá khoá học  thành công');
          window.location.reload();
        }
      });
  }

  listUserWaitingReview: any[] = [];
  listUserConfirmed: any[] = [];
  courseID: any = {
    maKhoaHoc: '',
  };

  userReview(event: any) {
    this.courseID.maKhoaHoc = event;
    this.data
      .post('QuanLyNguoiDung/LayDanhSachHocVienChoXetDuyet', this.courseID)
      .subscribe((result: any) => {
        this.listUserWaitingReview = result;
        this.shareData.sharingIDCourseReview(this.courseID.maKhoaHoc);
        this.shareData.sharingUser(result);
      });

    this.data
      .post('QuanLyNguoiDung/LayDanhSachNguoiDungChuaGhiDanh', this.courseID)
      .subscribe((result: any) => {
        this.listUserWaitingReview = result;
        this.shareData.sharingCourseReview(result);
      });

    this.data
      .post('QuanLyNguoiDung/LayDanhSachHocVienKhoaHoc', this.courseID)
      .subscribe((result: any) => {
        this.listUserConfirmed = result;
        this.shareData.sharingCourseConfirmed(result);
      });
  }
}
