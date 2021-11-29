import { DataService } from 'src/app/_core/services/data.service';

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  constructor(private data: DataService, private router: ActivatedRoute) {}
  tenKhoaHoc: any;
  searchData: any = [];

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    // this.tenKhoaHoc = this.router.snapshot.paramMap.get('tenKhoaHoc');
    // console.log(this.tenKhoaHoc);
    this.router.queryParams.subscribe((result: any) => {
      this.data
        .get(
          `QuanLyKhoaHoc/LayDanhSachKhoaHoc?tenKhoaHoc=${result.tenKhoaHoc}&MaNhom=GP01`
        )
        .subscribe((result) => {
          this.searchData = result;
          
        });
    });
  }
}
