import { OnInit, Component } from '@angular/core';
import { DataService } from '@services/data.service';
import { ShareDataService } from '@services/share-data.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.scss'],
})
export class UserManagementComponent implements OnInit {
  constructor(
    private data: DataService,
    private shareData: ShareDataService,
    private router: Router
  ) {}
  listUser: any[] = [];
  subListUser = new Subscription();

  page: any = 1;
  pageSize: any = 10;

  ngOnInit(): void {
    this.getUser();
  }

  getUser() {
    this.subListUser = this.data
      .get('QuanLyNguoiDung/TimKiemNguoiDung?MaNhom=GP01')
      .subscribe((result: any) => {
        console.log(result);
        this.listUser = result;
      });
  }

  deleteUser(id: any) {
    this.data
      .delete(`QuanLyNguoiDung/XoaNguoiDung?TaiKhoan=${id}`)
      .subscribe((result: any): void => {
        if (result) {
          alert('Xoá người dùng thành công');
          window.location.reload();
          console.log(result.status);
        }
      });
  }
  editUser(user: any) {
    this.shareData.sharingUser(user);
  }

  username: any = {
    taiKhoan: '',
  };

  listCourseWaitingReview: any;
  listCourseConfirmed: any;

  CourseWaitingReview(value: any): void {
    this.username.taiKhoan = value;
    this.data
      .post('QuanLyNguoiDung/LayDanhSachKhoaHocChoXetDuyet', this.username)
      .subscribe((result: any) => {
        this.listCourseWaitingReview = result;
        this.shareData.sharingUser(result);
        this.shareData.sharingIDCourseReview(this.username.taiKhoan);
      });

    this.data
      .post('QuanLyNguoiDung/LayDanhSachKhoaHocChuaGhiDanh', this.username)
      .subscribe((result: any) => {
        this.listCourseWaitingReview = result;
        this.shareData.sharingCourseReview(result);
      });

    this.data
      .post('QuanLyNguoiDung/LayDanhSachKhoaHocDaXetDuyet', this.username)
      .subscribe((result: any) => {
        this.listCourseConfirmed = result;
        this.shareData.sharingCourseConfirmed(result);
      });
  }

  findUser() {
    this.subListUser = this.data
      .get('QuanLyNguoiDung/TimKiemNguoiDung?MaNhom=GP01')
      .subscribe((result: any) => {
        console.log(result);
        this.listUser = result;
      });
  }
}
