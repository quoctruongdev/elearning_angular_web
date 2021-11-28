import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth.component';
import { HomeTemplateModule } from '../home-template/home-template.module';
import { HomeModule } from '../home-template/home/home.module';

@NgModule({
  declarations: [AuthComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    FormsModule,
    HomeTemplateModule,
    HomeModule,
  ],
})
export class AuthModule {}
