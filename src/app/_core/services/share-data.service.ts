import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ShareDataService {
  data: any = new BehaviorSubject({} as Object);
  dataUser: any = new BehaviorSubject({} as Object);
  dataCourseReview: any = new BehaviorSubject({} as Object);
  dataCourseConfirmed: any = new BehaviorSubject({} as Object);
  dataIdCourseReview: any = new BehaviorSubject({} as Object);

  shareData = this.data.asObservable();

  shareDataUser = this.dataUser.asObservable();
  shareDataCourse = this.dataCourseReview.asObservable();
  shareCourseConfirmed = this.dataCourseConfirmed.asObservable();
  shareIdCourseReview = this.dataIdCourseReview.asObservable();
  shareCourse: any;
  function: any;

  constructor() {}
  sharingData(_data: any) {
    console.log('_data', _data);
    this.data.next(_data);
  }
  sharingUser(_user: any) {
    console.log('_user', _user);
    this.dataUser.next(_user);
  }
  sharingCourseReview(_course: any) {
    this.dataCourseReview.next(_course);
    console.log('_course', _course);
  }
  sharingCourseConfirmed(_courseCF: any) {
    this.dataCourseConfirmed.next(_courseCF);
    console.log('_courseCF', _courseCF);
  }
  sharingIDCourseReview(_id: any) {
    console.log('CourseIDReview', _id);
    this.dataIdCourseReview.next(_id);
  }

  
}
