import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../Services/api.service';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  constructor(public apiServ: ApiService) {}
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

  /* Carousel BTNS */
  public carouselCount: any = 1;
  nextCarousel() {
    this.carouselCount++;
  }
  prevCarousel() {
    this.carouselCount--;
  }
}
