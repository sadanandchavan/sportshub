import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-code-verification-v2',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './code-verification-v2.component.html',
  styleUrl: './code-verification-v2.component.css',
})
export class CodeVerificationV2Component {}
