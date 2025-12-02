import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-under-construction',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './under-construction.component.html',
  styleUrl: './under-construction.component.css',
})
export class UnderConstructionComponent {}
