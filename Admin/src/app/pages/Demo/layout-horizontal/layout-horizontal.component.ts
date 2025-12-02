import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-layout-horizontal',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './layout-horizontal.component.html',
  styleUrl: './layout-horizontal.component.css',
})
export class LayoutHorizontalComponent {}
