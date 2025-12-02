import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-layout-vertical-tab',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './layout-vertical-tab.component.html',
  styleUrl: './layout-vertical-tab.component.css',
})
export class LayoutVerticalTabComponent {}
