import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeTemplateRoutingModule } from './home-template-routing.module';
import { HomeTemplateComponent } from './home-template.component';
import { NavbarHomeComponent } from './_component/navbar-home/navbar-home.component';
import { FormsModule } from '@angular/forms';
import { HomeModule } from './home/home.module';
import { ModalComponent } from './_component/modal/modal.component';
import { ClickDirective } from './_component/modal/click.directive';

@NgModule({
  declarations: [
    HomeTemplateComponent,
    NavbarHomeComponent,
    ModalComponent,
    ClickDirective,
  ],
  exports: [NavbarHomeComponent],
  imports: [CommonModule, HomeTemplateRoutingModule, FormsModule, HomeModule],
})
export class HomeTemplateModule {}
