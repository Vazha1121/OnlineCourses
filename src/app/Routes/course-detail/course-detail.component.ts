import { Component } from '@angular/core';
import {
  CommonModule,
  NgForOf,
} from '../../../../node_modules/@angular/common/common_module.d-NEF7UaHr';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-course-detail',
  imports: [],
  templateUrl: './course-detail.component.html',
  styleUrl: './course-detail.component.scss',
})
export class CourseDetailComponent {
  constructor(private route: ActivatedRoute) {}

  public open: boolean = false;
  toggle(index: number) {
    this.open = index === index ? !this.open : false;
  }
}
