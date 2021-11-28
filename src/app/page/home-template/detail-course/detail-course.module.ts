import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetailCourseRoutingModule } from './detail-course-routing.module';
import { DetailCourseComponent } from './detail-course.component';
import { HomeModule } from '../home/home.module';

@NgModule({
  declarations: [DetailCourseComponent],
  imports: [CommonModule, DetailCourseRoutingModule, HomeModule],
})
export class DetailCourseModule {}
