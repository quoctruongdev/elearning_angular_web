import { HomeModule } from './../home/home.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoryRoutingModule } from './category-routing.module';
import { CategoryComponent } from './category.component';
import { DanhmucComponent } from './danhmuc/danhmuc.component';

@NgModule({
  declarations: [CategoryComponent, DanhmucComponent],
  imports: [CommonModule, CategoryRoutingModule, HomeModule],
})
export class CategoryModule {}
