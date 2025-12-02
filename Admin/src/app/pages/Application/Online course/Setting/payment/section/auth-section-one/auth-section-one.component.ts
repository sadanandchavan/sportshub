import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-auth-section-one',
  standalone: true,
  imports: [],
  templateUrl: './auth-section-one.component.html',
  styleUrl: './auth-section-one.component.css'
})
export class AuthSectionOneComponent {
  @Output() next = new EventEmitter<void>();

}
