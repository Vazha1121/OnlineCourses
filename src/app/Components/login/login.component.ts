import { Component, OnInit } from '@angular/core';
import { PopUpServiceService } from '../../pop-up-service.service';

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent implements OnInit {
  constructor(public popService: PopUpServiceService) {}
  ngOnInit(): void {
    this.popService.showLogin$.subscribe((value) => {
      this.OpencloseLoginPop = value;
    });
  }
  public openLogin:boolean = true;
  public OpencloseLoginPop: boolean = true;
  closeLogin() {
    this.OpencloseLoginPop = true;
    console.log(this.OpencloseLoginPop);
  }
}
