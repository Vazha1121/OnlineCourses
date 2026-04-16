import { Component } from '@angular/core';

@Component({
  selector: 'app-enrolled-course',
  imports: [],
  templateUrl: './enrolled-course.component.html',
  styleUrl: './enrolled-course.component.scss',
})
export class EnrolledCourseComponent {
  public openCloseEnrolled: boolean = true;

  closeLogin() {
    this.openCloseEnrolled = true;
  }
}
