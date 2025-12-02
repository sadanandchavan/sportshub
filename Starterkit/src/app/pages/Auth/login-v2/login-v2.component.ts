import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-login-v2',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './login-v2.component.html',
  styleUrl: './login-v2.component.css',
})
export class LoginV2Component {}
