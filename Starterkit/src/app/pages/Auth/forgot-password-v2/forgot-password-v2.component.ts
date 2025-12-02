import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-forgot-password-v2',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './forgot-password-v2.component.html',
  styleUrl: './forgot-password-v2.component.css',
})
export class ForgotPasswordV2Component {}
