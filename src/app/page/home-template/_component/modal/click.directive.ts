import { Directive, ElementRef, ViewChild, HostListener } from '@angular/core';
import { ModalComponent } from './modal.component';
@Directive({
  selector: '[appClick]',
})
export class ClickDirective {
  @ViewChild('ModalComponent') click: ModalComponent = new ModalComponent();
  constructor(private clickMOdal: ElementRef) {
    this.clickMOdal.nativeElement.style.backgroundColor = 'red';
    this.clickMOdal.nativeElement.style.display = 'none';
  }
}
