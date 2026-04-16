import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../Services/api.service';
import { RouterModule } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  constructor(
    public apiServ: ApiService,
    public cookie: CookieService,
  ) {}
  ngOnInit(): void {
    this.featuredCourse();
  }

  /* Featured Courses */

  public featuredData: any;
  featuredCourse() {
    this.apiServ.featuredCourses().subscribe({
      next: (data: any) => {
        this.featuredData = data.data;
        console.log(this.featuredData);
      },
    });
  }

  goToDetail(id: number) {
    console.log(id);
  }
  /* Carousel BTNS */
  public carouselCount: any = 1;
  nextCarousel() {
    this.carouselCount++;
  }
  prevCarousel() {
    this.carouselCount--;
  }
}
