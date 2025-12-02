import { Component } from '@angular/core';
import { BreadcrumbComponent } from '../../../layouts/breadcrumb/breadcrumb.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-animation',
  standalone: true,
  imports: [BreadcrumbComponent,FormsModule,CommonModule],
  templateUrl: './animation.component.html',
  styleUrl: './animation.component.css',
})
export class AnimationComponent {
  selectedAnimation: string;  

  getAnimationClass() {
    return this.selectedAnimation ? `animate__${this.selectedAnimation}` : '';
  }
}
