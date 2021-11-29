import { DataService } from 'src/app/_core/services/data.service';
import { Component, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Subscription } from 'rxjs';
@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss'],
})
export class CategoryComponent implements OnInit {
  constructor(
    private activaterouter: ActivatedRoute,
    private danhMucData: DataService
  ) {}
  subListDanhMuc = new Subscription();
  danhmucData: any = [];

  ngOnInit(): void {
    this.getParamDanhMuc();
    this.getDanhMuc();
  }
  getParamDanhMuc() {
    this.activaterouter.queryParams.subscribe((result: any) => {
      

      this.subListDanhMuc = this.danhMucData
        .get(
          `QuanLyKhoaHoc/LayKhoaHocTheoDanhMuc?maDanhMuc=${result.maDanhMuc}&MaNhom=${result.maNhom}`
        )
        .subscribe((value) => {
          this.danhmucData = value;
         
        });
    });
  }
  getDanhMuc() {}
  ngOnChanges(changes: SimpleChanges) {
    console.log(changes);
    this.getDanhMuc();
  }
  ngOnDestroy() {
    this.subListDanhMuc.unsubscribe();
  }
}
