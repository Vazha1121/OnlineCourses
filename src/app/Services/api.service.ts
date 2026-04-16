import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(
    public http: HttpClient,
    public cookie: CookieService,
  ) {}

  /* Courses */

  featuredCourses() {
    return this.http.get(
      `https://api.redclass.redberryinternship.ge/api/courses/featured`,
    );
  }

  courseDetail(courseID: any) {
    return this.http.get(
      `https://api.redclass.redberryinternship.ge/api/courses/${courseID}`,
    );
  }
  /* course enrollment */

  courseEnrollment(body: any, header: any) {
    
    return this.http.post(
      `https://api.redclass.redberryinternship.ge/api/enrollments`,
      body,
      { headers: header },
    );
  }
  /* weekly schedule */

  getWeeklySchedule(courseId: number) {
    return this.http.get(
      `https://api.redclass.redberryinternship.ge/api/courses/${courseId}/weekly-schedules`,
    );
  }
  /* get Time Slot */
  getTimeSlot(courseId: any, scheduleId: number) {
    return this.http.get(
      `https://api.redclass.redberryinternship.ge/api/courses/${courseId}/time-slots?weekly_schedule_id=${scheduleId}`,
    );
  }
  /*get Session type */

  getSessionType(courseId: any, scheduleId: number, timeSlotId: any) {
    return this.http.get(
      `https://api.redclass.redberryinternship.ge/api/courses/${courseId}/session-types?weekly_schedule_id=${scheduleId}&time_slot_id=${timeSlotId}`,
    );
  }
  /* User */

  register(body: any, header: any) {
    return this.http.post(
      `https://api.redclass.redberryinternship.ge/api/register`,
      body,
      { headers: header },
    );
  }

  loginIn(body: any, header: HttpHeaders) {
    return this.http.post(
      `https://api.redclass.redberryinternship.ge/api/login`,
      body,
      { headers: header },
    );
  }

  profile(header: HttpHeaders) {
    return this.http.get(`https://api.redclass.redberryinternship.ge/api/me`, {
      headers: header,
    });
  }

  updateProf(body: any, header: HttpHeaders) {
    return this.http.put(
      `https://api.redclass.redberryinternship.ge/api/profile`,
      body,
      { headers: header },
    );
  }
}
