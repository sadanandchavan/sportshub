import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-forgot-password-v1',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './forgot-password-v1.component.html',
  styleUrl: './forgot-password-v1.component.css',
})
export class ForgotPasswordV1Component {}
