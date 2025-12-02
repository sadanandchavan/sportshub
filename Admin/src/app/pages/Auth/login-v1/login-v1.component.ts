import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-login-v1',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './login-v1.component.html',
  styleUrl: './login-v1.component.css',
})
export class LoginV1Component {}
