import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListCourseRoutingModule } from './list-course-routing.module';
import { ListCourseComponent } from './list-course.component';
import { CourseComponent } from './course/course.component';
// import { HomeModule } from '../home/home.module';

@NgModule({
  declarations: [ListCourseComponent, CourseComponent],
  exports: [ListCourseComponent],
  imports: [CommonModule, ListCourseRoutingModule],
})
export class ListCourseModule {}
