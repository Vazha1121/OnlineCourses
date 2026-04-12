import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PopUpServiceService {
  constructor() {}

  private showLoginPopUp = new BehaviorSubject<boolean>(true);
  showLogin$ = this.showLoginPopUp.asObservable();

  private showRegisterPopUp = new BehaviorSubject<boolean>(true);
  showRegister$ = this.showRegisterPopUp.asObservable();
  public openLogin() {
    this.showLoginPopUp.next(false);
  }

  public openRegister() {
    this.showRegisterPopUp.next(false);
  }
}
