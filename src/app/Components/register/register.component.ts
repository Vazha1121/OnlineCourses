import { Component, OnInit } from '@angular/core';
import { PopUpServiceService } from '../../Services/pop-up-service.service';

@Component({
  selector: 'app-register',
  imports: [],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
})
export class RegisterComponent implements OnInit {
  constructor(public popService: PopUpServiceService) {}
  ngOnInit(): void {
    this.popService.showRegister$.subscribe((value) => {
      this.OpencloseRegisterPop = value;
    });
  }
  public OpencloseRegisterPop: boolean = true;
  closeLogin() {
    this.OpencloseRegisterPop = true;
    console.log(this.OpencloseRegisterPop);
  }
}
