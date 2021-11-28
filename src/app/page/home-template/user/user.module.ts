import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { FormsModule } from '@angular/forms';
import { HomeModule } from '../home/home.module';
import { UserCourseComponent } from './user-course/user-course.component';

@NgModule({
  declarations: [UserComponent, UserCourseComponent],
  imports: [CommonModule, UserRoutingModule, FormsModule, HomeModule],
})
export class UserModule {}
