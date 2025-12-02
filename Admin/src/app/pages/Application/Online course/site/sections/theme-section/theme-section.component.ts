import { Component } from '@angular/core';
import { NgxDropzoneModule } from 'ngx-dropzone';

@Component({
  selector: 'app-theme-section',
  standalone: true,
  imports: [NgxDropzoneModule],
  templateUrl: './theme-section.component.html',
  styleUrl: './theme-section.component.css'
})
export class ThemeSectionComponent {

}
