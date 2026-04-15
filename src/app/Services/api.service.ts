import { HttpClient, HttpHeaders } from '@angular/common/http';
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
