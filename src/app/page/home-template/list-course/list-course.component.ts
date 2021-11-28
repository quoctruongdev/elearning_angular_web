import { DataService } from 'src/app/_core/services/data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-course',
  templateUrl: './list-course.component.html',
  styleUrls: ['./list-course.component.scss'],
})
export class ListCourseComponent implements OnInit {
  constructor(private data: DataService) {}
  listCourse: any = [];
  ngOnInit(): void {
    this.getCourse();
  }

  getCourse() {
    this.data
      .get('QuanLyKhoaHoc/LayDanhSachKhoaHoc?MaNhom=GP01')
      .subscribe((result: any) => {
        this.listCourse = result;
      });
  }
}
