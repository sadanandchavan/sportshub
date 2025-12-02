import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { BreadcrumbComponent } from '../../../../../layouts/breadcrumb/breadcrumb.component';

@Component({
  selector: 'app-course-view',
  standalone: true,
  imports: [BreadcrumbComponent, CommonModule],
  templateUrl: './course-view.component.html',
  styleUrl: './course-view.component.css'
})
export class CourseViewComponent {

  courses = [
    {
      "id": 1,
      "title": "Bootstrap 5 Beginner Course",
      "rating": 4.8,
      "duration": "10 Months",
      "teacher": "Jimmy Morris",
      "students": "+120",
      "image": "../assets/images/admin/img-course-1.png",
      "badge": "Free"
    },
    {
      "id": 2,
      "title": "PHP Training Course",
      "rating": 4.5,
      "duration": "10 Months",
      "teacher": "Nashid Martines",
      "students": "+50",
      "image": "../assets/images/admin/img-course-2.png",
      "badge": null
    },
    {
      "id": 3,
      "title": "MERN Stack Training Course",
      "rating": 3.9,
      "duration": "10 Months",
      "teacher": "Jack Ronan",
      "students": "+100",
      "image": "../assets/images/admin/img-course-3.png",
      "badge": "Free"
    },
    {
      "id": 4,
      "title": "Python Training Course",
      "rating": 4.5,
      "duration": "10 Months",
      "teacher": "Garrett Winters",
      "students": "+110",
      "image": "../assets/images/admin/img-course-4.png",
      "badge": null
    },
    {
      "id": 5,
      "title": "Web Designing Course",
      "rating": 4.2,
      "duration": "10 Months",
      "teacher": "Tiger Nixon",
      "students": "+110",
      "image": "../assets/images/admin/img-course-5.png",
      "badge": null
    },
    {
      "id": 6,
      "title": "C Training Course",
      "rating": 4.6,
      "duration": "10 Months",
      "teacher": "Airi Satou",
      "students": "+70",
      "image": "../assets/images/admin/img-course-6.png",
      "badge": "Free"
    },
    {
      "id": 7,
      "title": "UI/UX Designing Course",
      "rating": 4.6,
      "duration": "10 Months",
      "teacher": "Sonya Frost",
      "students": "+150",
      "image": "../assets/images/admin/img-course-7.png",
      "badge": null
    },
    {
      "id": 8,
      "title": "SEO Training Course",
      "rating": 4.3,
      "duration": "10 Months",
      "teacher": "Cedric Kelly",
      "students": "+60",
      "image": "../assets/images/admin/img-course-8.png",
      "badge": null
    }
  ];

}
