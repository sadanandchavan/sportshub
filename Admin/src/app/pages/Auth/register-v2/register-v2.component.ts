import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-register-v2',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './register-v2.component.html',
  styleUrl: './register-v2.component.css',
})
export class RegisterV2Component {}
