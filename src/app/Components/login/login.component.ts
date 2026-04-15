import { Component, OnInit } from '@angular/core';
import { PopUpServiceService } from '../../Services/pop-up-service.service';
import { ApiService } from '../../Services/api.service';
import { CookieService } from 'ngx-cookie-service';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent implements OnInit {
  constructor(
    public popService: PopUpServiceService,
    public api: ApiService,
    public cookie: CookieService,
  ) {}
  ngOnInit(): void {
    this.popService.showLogin$.subscribe((value) => {
      this.OpencloseLoginPop = value;
    });
  }

  /* login In */

  public loginForm: FormGroup = new FormGroup({
    email: new FormControl(),
    password: new FormControl(),
  });

  public header: any = {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  };
  login() {
    this.api.loginIn(this.loginForm.value, this.header).subscribe({
      next: (data: any) => {
        console.log(data);
        this.cookie.set('userToken', data.data.token);
      },
    });
  }
  /* ClosePopUp */

  public openLogin: boolean = true;
  public OpencloseLoginPop: boolean = true;
  closeLogin() {
    this.OpencloseLoginPop = true;
    console.log(this.OpencloseLoginPop);
  }
}
