import { Component, OnInit } from '@angular/core';
import { PopUpServiceService } from '../../Services/pop-up-service.service';
import { ApiService } from '../../Services/api.service';
import { HttpHeaders } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { profile } from 'console';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-profile',
  standalone:true,
  imports: [ReactiveFormsModule,RouterModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss',
})
export class ProfileComponent implements OnInit {
  constructor(
    public popService: PopUpServiceService,
    public apiService: ApiService,
    public cookie: CookieService,
  ) {}
  ngOnInit(): void {
    this.popService.showProfile$.subscribe((value) => {
      this.openCloseBtn = value;
    });

    this.profileInfo();
  }
  public profileArray: any[] = [];
  profileInfo() {
    const header = new HttpHeaders({
      Authorization: `Bearer ${this.cookie.get('userToken')}`,
    });
    this.apiService.profile(header).subscribe({
      next: (data: any) => {
        this.profileArray = [data.data];
      },
    });
  }
  /* update Profile */

  updateProfileForm = new FormGroup({
    username: new FormControl(),
    email: new FormControl([Validators.required, Validators.email]),
    fullName: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(50),
    ]),
    mobileNumber: new FormControl('', [
      Validators.required,
      Validators.pattern(/^5\d{8}$/),
    ]),
    age: new FormControl('', [Validators.required, Validators.min(16)]),
  });
  updateProfile() {
    const header = new HttpHeaders({
      Authorization: `Bearer ${this.cookie.get('userToken')}`,
    });
    console.log(this.updateProfileForm.value);
    this.apiService.updateProf(this.updateProfileForm.value, header).subscribe({
      next: (data: any) => {
        if (this.updateProfileForm.invalid) {
          this.updateProfileForm.markAllAsTouched();
          return;
        }
      },
    });
  }
  /* photo drag and drop */
  public isDragging: boolean = false;

  onDragOver(event: DragEvent) {
    event.preventDefault();
    this.isDragging = true;
  }

  onDragLeave(event: DragEvent) {
    event.preventDefault();
    this.isDragging = false;
  }

  onDrop(event: DragEvent) {
    event.preventDefault();
    this.isDragging = false;

    if (event.dataTransfer?.files.length) {
      const file = event.dataTransfer.files[0];
      this.handleFile(file);
    }
  }

  onFileSelected(event: any) {
    const file = event.target.files[0];
    this.handleFile(file);
    if (file) {
    }
  }
  handleFile(file: File) {}

  /* Close Profile */

  public openCloseBtn: boolean = true;
  closeProfile() {
    this.openCloseBtn = true;
  }
}
