import { Component } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { LoginComponent } from '../login/login.component';
import { BehaviorSubject } from 'rxjs';
import { PopUpServiceService } from '../../Services/pop-up-service.service';
import { RegisterComponent } from '../register/register.component';
import { RouterModule } from '@angular/router';
import { ProfileComponent } from '../profile/profile.component';
import { EnrolledCourseComponent } from '../enrolled-course/enrolled-course.component';
@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    RouterModule,
    EnrolledCourseComponent,
  ],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss',
})
export class NavComponent {
  constructor(
    public cookie: CookieService,
    public popService: PopUpServiceService,
  ) {}

  public openLogin() {
    this.popService.openLogin();
  }

  public openRegister() {
    this.popService.openRegister();
  }

  public openProfile() {
    this.popService.openProfile();
  }

  public openEnroll() {
    this.popService.openEnrolled();
  }
}
