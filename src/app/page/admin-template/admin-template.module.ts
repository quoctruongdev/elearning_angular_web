import { NgAntdModule } from './../../_core/shares/antd.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminTemplateRoutingModule } from './admin-template-routing.module';
import { AdminTemplateComponent } from './admin-template.component';
import { ComponentsModule } from 'src/app/components/components.module';
import { HeaderAdminComponent } from './_components/header-admin/header-admin.component';
import { SideNavComponent } from './_components/side-nav/side-nav.component';
import { EditUserComponent } from './user-management/edit-user/edit-user.component';
import { FormsModule } from '@angular/forms';

import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { MaterialModule } from 'src/app/_core/shares/material.module';
import { RegisterUserComponent } from './user-management/register-user/register-user.component';
import { RegisterCourseComponent } from './course-management/register-course/register-course.component';

@NgModule({
  declarations: [
    AdminTemplateComponent,
    HeaderAdminComponent,
    SideNavComponent,
    EditUserComponent,
    RegisterUserComponent,
    RegisterCourseComponent,
  ],
  imports: [
    CommonModule,

    AdminTemplateRoutingModule,
    ComponentsModule,
    NgAntdModule,
    FormsModule,
    NgbPaginationModule,
    MaterialModule,
  ],
})
export class AdminTemplateModule {}
