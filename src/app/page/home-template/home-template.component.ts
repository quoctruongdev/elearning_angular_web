import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-template',
  templateUrl: './home-template.component.html',
  styleUrls: ['./home-template.component.scss'],
})
export class HomeTemplateComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    this.checkTimeOut();
  }

  checkTimeOut() {
    const exp: any = localStorage.getItem('exp');
    const date: any = new Date().getTime();
    if (date > exp) {
      localStorage.removeItem('Admin');
      localStorage.removeItem('User');
      localStorage.removeItem('exp');
    }
  }
}
