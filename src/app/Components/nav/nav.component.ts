import { Component } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { LoginComponent } from '../login/login.component';
import { BehaviorSubject } from 'rxjs';
import { PopUpServiceService } from '../../pop-up-service.service';
@Component({
  selector: 'app-nav',
  imports: [LoginComponent],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss',
})
export class NavComponent {
  constructor(
    public cookie: CookieService,
    public popService: PopUpServiceService,
  ) {}

  private showLoginPopUp = new BehaviorSubject<boolean>(true);
  public openLogin() {
    this.popService.openLogin();
  }
}
