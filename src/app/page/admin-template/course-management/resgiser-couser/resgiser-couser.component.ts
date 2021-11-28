import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resgiser-couser',
  templateUrl: './resgiser-couser.component.html',
  styleUrls: ['./resgiser-couser.component.scss'],
})
export class ResgiserCouserComponent implements OnInit {
  unregisterListCourse: any[] = [];
  page: any = 1;
  pageSize: any = 10;
  constructor() {}

  ngOnInit(): void {}
}
