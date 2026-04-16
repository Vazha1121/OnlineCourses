import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { ApiService } from '../../Services/api.service';
import { CommonModule } from '@angular/common';
import { HttpHeaders } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-course-detail',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './course-detail.component.html',
  styleUrl: './course-detail.component.scss',
})
export class CourseDetailComponent implements OnInit {
  constructor(
    public api: ApiService,
    private actRoute: ActivatedRoute,
    public cookie: CookieService,
  ) {}
  ngOnInit(): void {
    const courseId = this.actRoute.snapshot.paramMap.get(`id`);
    this.getCourseDetail(courseId);
    this.weeklySchedule(courseId);
    this.getTimeSlot(courseId, this.scheduleId);
  }

  /* courseDetail API */
  public courseId: any;
  public courseInfo: any;
  basePrice: any;
  totalPrice: any;
  getCourseDetail(id: any) {
    this.api.courseDetail(id).subscribe({
      next: (data: any) => {
        this.courseId = data.data.id;
        this.courseInfo = [data.data];
        this.basePrice = data.data.basePrice;
      },
    });
  }

  /* weekly Schedule */
  scheduleArray: any;
  weeklySchedule(id: any) {
    this.api.getWeeklySchedule(id).subscribe({
      next: (data: any) => {
        this.scheduleArray = data.data;
      },
    });
  }
  scheduleId: any;
  getScheduleId(schedId: any) {
    this.scheduleId = schedId;

    this.getTimeSlot(this.courseId, schedId);
  }

  /* time slot */
  timeSlotArray: any;
  getTimeSlot(courseId: any, scheduleId: any) {
    this.api.getTimeSlot(courseId, scheduleId).subscribe({
      next: (data: any) => {
        this.timeSlotArray = data.data;
      },
    });
  }
  timeSlotId: any;
  getTimeSlotID(timeSlotId: any) {
    this.timeSlotId = timeSlotId;
    this.getSessionType(this.courseId, this.scheduleId, timeSlotId);
  }
  /* session Type */

  sessionTypeArray: any;
  priceModifier: any;
  getSessionType(courseId: any, scheduleId: any, timeSlotId: any) {
    this.api.getSessionType(courseId, scheduleId, timeSlotId).subscribe({
      next: (data: any) => {
        this.sessionTypeArray = data.data;
        console.log(this.sessionTypeArray);
        this.priceModifier = data.data[0].priceModifier;
        this.totalPrice = Number(this.priceModifier) + Number(this.basePrice);
      },
    });
  }

  /* Enroll course */

  enroleCourse() {
    const body: any = {
      courseId: this.courseId,
      courseSchedule: this.scheduleId,
      force: true,
    };

    const header = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${this.cookie.get('userToken')}`,
    };
    this.api.courseEnrollment(body, header).subscribe({
      next: (data: any) => {
        console.log(data);
      },
    });
  }
  /*  */
  public open: boolean = false;
  toggle(index: number) {
    this.open = index === index ? !this.open : false;
  }
}
