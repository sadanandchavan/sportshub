import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-register-v1',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './register-v1.component.html',
  styleUrl: './register-v1.component.css',
})
export class RegisterV1Component {}
