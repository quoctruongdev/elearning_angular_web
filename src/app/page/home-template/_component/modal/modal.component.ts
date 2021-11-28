import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit {
  dis: boolean = false;
  TIME_EXP: number = 1800000;
  constructor() {}

  ngOnInit(): void {
    this.pupop();
  }
  pupop() {
    const timecurent: any = new Date().getTime();
    const gettimePupop: any = localStorage.getItem('timePupop');
    if (gettimePupop > timecurent) {
      this.dis = true;
    } else {
      this.dis = false;
    }
  }
  tat() {
    this.dis = true;

    const timePupop: any = new Date().getTime() + this.TIME_EXP;

    localStorage.setItem('timePupop', timePupop);
  }
}
