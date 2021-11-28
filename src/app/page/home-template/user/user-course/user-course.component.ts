import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-user-course',
  templateUrl: './user-course.component.html',
  styleUrls: ['./user-course.component.scss'],
})
export class UserCourseComponent implements OnInit {
  @Input() userCourse: any;
  @Input() stt: any;
  constructor() {}

  ngOnInit(): void {}
}
