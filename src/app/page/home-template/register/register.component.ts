import { DataService } from 'src/app/_core/services/data.service';
import { Component, OnInit, ViewChild, HostListener } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  constructor(private user1: DataService, private router: Router) {}
  @ViewChild('registerForm') registerForm: any;
  ngOnInit(): void {
    this.portected();
  }
  portected() {
    if (localStorage.getItem('User')) {
      this.router.navigate(['/']);
    }
  }
  register(user: any) {
    user.maNhom = 'GP01';
    console.log(user);

    this.user1.post('QuanLyNguoiDung/DangKy', user).subscribe((result: any) => {
      console.log(result);
      this.router.navigate(['/auth']);
    });
  }
  @HostListener('window:beforeunload', ['$event'])
  candeactiveRegister() {
    return !this.registerForm.dirty;
  }
}
