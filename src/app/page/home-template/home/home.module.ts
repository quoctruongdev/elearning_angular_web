import { MaterialModule } from 'src/app/_core/shares/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';

import { SliderComponent } from './slider/slider.component';
import { InfoComponent } from './info/info.component';
import { FooterComponent } from './footer/footer.component';
import { ListCourseModule } from '../list-course/list-course.module';

@NgModule({
  declarations: [
    HomeComponent,
    SliderComponent,
    InfoComponent,
    FooterComponent,
  ],
  exports: [SliderComponent, FooterComponent],
  imports: [CommonModule, HomeRoutingModule, MaterialModule, ListCourseModule],
})
export class HomeModule {}
