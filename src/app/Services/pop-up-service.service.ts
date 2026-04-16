import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PopUpServiceService {
  constructor() {}

  /* login popup */
  private showLoginPopUp = new BehaviorSubject<boolean>(true);
  showLogin$ = this.showLoginPopUp.asObservable();

  public openLogin() {
    this.showLoginPopUp.next(false);
  }

  /* register popup */
  private showRegisterPopUp = new BehaviorSubject<boolean>(true);
  showRegister$ = this.showRegisterPopUp.asObservable();

  public openRegister() {
    this.showRegisterPopUp.next(false);
  }
  /* profile popup */
  private showProfilePopUp = new BehaviorSubject<boolean>(true);
  showProfile$ = this.showProfilePopUp.asObservable();

  public openProfile() {
    this.showProfilePopUp.next(false);
  }

  private showEnrolledPop = new BehaviorSubject<boolean>(true);
  showEnrolled$ = this.showEnrolledPop.asObservable();

  public openEnrolled() {
    this.showEnrolledPop.next(false);
  }
}
