import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(public http: HttpClient) {}

  /* Courses */

  featuredCourses() {
    return this.http.get(
      `https://api.redclass.redberryinternship.ge/api/courses/featured`,
    );
  }
}
