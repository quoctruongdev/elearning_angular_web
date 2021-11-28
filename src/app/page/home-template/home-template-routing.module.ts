import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeTemplateComponent } from './home-template.component';
import { HomeTemplateModule } from './home-template.module';

const routes: Routes = [
  {
    path: '',
    component: HomeTemplateComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./home/home.module').then((m) => m.HomeModule),
      },
      {
        path: 'about',
        loadChildren: () =>
          import('./about/about.module').then((m) => m.AboutModule),
      },
      {
        path: 'list-course',
        loadChildren: () =>
          import('./list-course/list-course.module').then(
            (m) => m.ListCourseModule
          ),
      },
      {
        path: 'detail/:id',
        loadChildren: () =>
          import('./detail-course/detail-course.module').then(
            (m) => m.DetailCourseModule
          ),
      },
      {
        path: 'category/:id',
        loadChildren: () =>
          import('./category/category.module').then((m) => m.CategoryModule),
      },
      {
        path: 'register',
        loadChildren: () =>
          import('./register/register.module').then((m) => m.RegisterModule),
      },
      {
        path: 'search/:tenKhoaHoc',
        loadChildren: () =>
          import('./search/search.module').then((m) => m.SearchModule),
      },
      {
        path: 'user',
        loadChildren: () =>
          import('./user/user.module').then((m) => m.UserModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeTemplateRoutingModule {}
