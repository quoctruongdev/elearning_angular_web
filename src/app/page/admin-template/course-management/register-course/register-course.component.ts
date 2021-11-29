import { Component, OnInit } from '@angular/core';
import { DataService } from '@services/data.service';
import { ShareDataService } from '@services/share-data.service';

@Component({
  selector: 'app-register-course',
  templateUrl: './register-course.component.html',
  styleUrls: ['./register-course.component.scss'],
})
export class RegisterCourseComponent implements OnInit {
  listUserWaitingReview: any[] = [];
  subListUserWaitingReview: any[] = [];
  listUserConfirmed: any[] = [];

  page: any = 1;
  pageSize: any = 5;
  pages: any = 1;
  pageSizes: any = 5;

  CousreID: any;
  selectedValue: any;

  constructor(private shareData: ShareDataService, private data: DataService) {
    this.shareData.shareDataUser.subscribe(
      (result: any) => (
        (this.listUserWaitingReview = result),
        console.log('hhhh', this.listUserWaitingReview)
      )
    );
    this.shareData.shareCourseConfirmed.subscribe(
      (result: any) => (this.listUserConfirmed = result)
    );
    this.shareData.shareIdCourseReview.subscribe(
      (result: any) => (this.CousreID = result)
    );
    this.shareData.shareDataCourse.subscribe(
      (result: any) => (this.subListUserWaitingReview = result)
    );
  }

  ngOnInit(): void {}

  item: any = {
    maKhoaHoc: '',
    taiKhoan: '',
  };

  chooseCourse(event: any) {
    console.log('lll', event);
    this.selectedValue = event;
  }

  registerUser(): void {
    this.item.taiKhoan = this.selectedValue;
    this.item.maKhoaHoc = this.CousreID;
    console.log('object', this.item);
    this.data
      .post('QuanLyKhoaHoc/GhiDanhKhoaHoc', this.item)
      .subscribe((result: any) => {
        if (result) {
          window.location.reload();
        }
      });
  }

  confirmUser(value: any): void {
    this.item.taiKhoan = value;
    this.item.maKhoaHoc = this.CousreID;
    console.log('object', this.item);
    this.data
      .post('QuanLyKhoaHoc/GhiDanhKhoaHoc', this.item)
      .subscribe((result: any) => {
        if (result) {
          window.alert('xác nhận ');
          location.reload();
        }
      });
  }
  cancelCourse(value: any): void {
    this.item.taiKhoan = value;
    this.item.maKhoaHoc = this.CousreID;
    this.data
      .post('/QuanLyKhoaHoc/HuyGhiDanh', this.item)
      .subscribe((result: any) => {
        if (result) {
          alert('Huỷ thành công');
        }
      });
  }
  closeModal() {
    window.location.reload();
  }
}
