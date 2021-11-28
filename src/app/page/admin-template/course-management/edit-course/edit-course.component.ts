import { Component, OnInit } from '@angular/core';
import { DataService } from '@services/data.service';
import { ShareDataService } from '@services/share-data.service';

@Component({
  selector: 'app-edit-couser',
  templateUrl: './edit-course.component.html',
  styleUrls: ['./edit-course.component.scss'],
})
export class EditCouserComponent implements OnInit {
  constructor(private data: DataService, private shareData: ShareDataService) {}
  course: any;
  image: any;
  newValue: any = '';
  danhMucKhoaHoc: any;

  ngOnInit(): void {
    this.shareData.shareDataUser.subscribe(
      (result: any) => (this.course = result)
    );
    this.getMenuCourse();
  }
  fileName: any;

  getMenuCourse() {
    this.data.get('QuanLyKhoaHoc/LayDanhMucKhoaHoc').subscribe((result) => {
      this.danhMucKhoaHoc = result;
    });
  }

  onFileSelected(event: any): void {
    let reader = new FileReader();

    let file: File = event.target.files[0];
    console.log(file);
    if (file) {
      this.fileName = file.name;
    }
    reader.onloadend = () => {
      this.image = (<string>reader.result).split(',')[1];
    };
    reader.readAsDataURL(file);
  }

  chooseListCourse(event: any) {
    console.log(event);
    return (this.newValue = event);
  }

  editCourse(course: any): void {
    console.log(course);

    course.hinhAnh = this.image;
    course.maNhom = 'GP01';
    course.maLoaiNguoiDung = 'GV';
    this.data
      .put('QuanLyKhoaHoc/CapNhatKhoaHoc', course)
      .subscribe((result) => {
        if (result) {
          alert('Cập nhật khoá học thành công');
          window.location.reload();
        }
      });
  }
}
