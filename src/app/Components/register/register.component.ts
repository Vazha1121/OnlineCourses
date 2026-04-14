import { Component, OnInit } from '@angular/core';
import { PopUpServiceService } from '../../Services/pop-up-service.service';
import { ApiService } from '../../Services/api.service';
import { CookieService } from 'ngx-cookie-service';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { register } from 'module';

@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
})
export class RegisterComponent implements OnInit {
  constructor(
    public popService: PopUpServiceService,
    public apiservice: ApiService,
    public cookie: CookieService,
  ) {}

  ngOnInit(): void {
    this.popService.showRegister$.subscribe((value) => {
      this.OpencloseRegisterPop = value;
    });
  }

  /* Register */

  public header: any = {
    header: 'application/json',
  };

  public registerForm: FormGroup = new FormGroup({
    username: new FormControl(``, [
      Validators.required,
      Validators.minLength(3),
    ]),
    email: new FormControl(``, [Validators.required, Validators.email]),
    password: new FormControl(``, [
      Validators.required,
      Validators.minLength(3),
    ]),
    password_confirmation: new FormControl(``, [Validators.required]),
    avatar: new FormControl([null]),
  });

  //passwordConfirmation

  passwordMatch(form: AbstractControl) {
    const password = form.get(`password`)?.value;
    const confirm_password = form.get(`password_confirmation`)?.value;

    return password === confirm ? null : { mismatch: true };
  }

  //avatar

  imageSelected(event: any) {
    const file = event.target.files[0];

    if (!file) return;

    const allowedImageTypes = ['image/jpeg', 'image/png', 'image/webp'];

    if (!allowedImageTypes.includes(file.type)) {
      this.registerForm.get('avatar')?.setErrors({ invalidType: true });
    } else {
      this.registerForm.get('avatar')?.setErrors(null);
      this.registerForm.patchValue({ avatar: file });
    }
  }

  /* submit Register */

  submit() {
    if (this.registerForm.invalid) {
      this.registerForm.markAllAsTouched();

      return;
    }
    console.log(this.registerForm.value);
  }
  /* Pop Up Close */

  public OpencloseRegisterPop: boolean = true;

  closeLogin() {
    this.OpencloseRegisterPop = true;
    console.log(this.OpencloseRegisterPop);
  }

  /* Carousel BTNS */
  public carouselCount: any = 0;

  nextCarousel() {
    this.carouselCount++;
    console.log(this.carouselCount);
  }
}
