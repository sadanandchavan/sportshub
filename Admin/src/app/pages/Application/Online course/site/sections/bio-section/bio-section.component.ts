import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { QuillModule } from 'ngx-quill';

@Component({
  selector: 'app-bio-section',
  standalone: true,
  imports: [CommonModule, QuillModule],
  templateUrl: './bio-section.component.html',
  styleUrl: './bio-section.component.css'
})
export class BioSectionComponent {

  data = [
    {
      "name": "Airi Satou",
      "date": "2023/09/12",
      "time": "09:05 PM",
      "image": "../assets/images/user/avatar-1.jpg"
    },
    {
      "name": "Ashton Cox",
      "date": "2023/12/24",
      "time": "09:05 PM",
      "image": "../assets/images/user/avatar-2.jpg"
    },
    {
      "name": "Bradley Greer",
      "date": "2022/09/19",
      "time": "09:05 PM",
      "image": "../assets/images/user/avatar-3.jpg"
    },
    {
      "name": "Brielle Williamson",
      "date": "2022/08/22",
      "time": "09:05 PM",
      "image": "../assets/images/user/avatar-4.jpg"
    },
    {
      "name": "Airi Satou",
      "date": "2023/09/12",
      "time": "09:05 PM",
      "image": "../assets/images/user/avatar-5.jpg"
    },
    {
      "name": "Ashton Cox",
      "date": "2023/12/24",
      "time": "09:05 PM",
      "image": "../assets/images/user/avatar-6.jpg"
    },
    {
      "name": "Bradley Greer",
      "date": "2022/09/19",
      "time": "09:05 PM",
      "image": "../assets/images/user/avatar-7.jpg"
    }
  ]

  editorModules = {
    toolbar: [
      [{ header: [1, 2, false] }],
      ['bold', 'italic', 'underline'],
      ['image', 'code-block']
    ]
  };


}
