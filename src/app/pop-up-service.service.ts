import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PopUpServiceService {
  constructor() {}

  private showLoginPopUp = new BehaviorSubject<boolean>(true);
  showLogin$ = this.showLoginPopUp.asObservable();

  public openLogin() {
    this.showLoginPopUp.next(false);
  }
}
