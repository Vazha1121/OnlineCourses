import { Routes } from '@angular/router';
import { HomeComponent } from './Routes/home/home.component';
import { CourseDetailComponent } from './Routes/course-detail/course-detail.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'courseDetail/:id',
    component: CourseDetailComponent,
  },
];
