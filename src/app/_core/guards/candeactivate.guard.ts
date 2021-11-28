import { RegisterComponent } from 'src/app/page/home-template/register/register.component';
import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class CandeactivateGuard implements CanDeactivate<RegisterComponent> {
  canDeactivate(component: any) {
    const result =
      component.candeactiveRegister() ||
      window.confirm('Bạn có muốn thoát khỏi trang ?');
    return result;
  }
}
