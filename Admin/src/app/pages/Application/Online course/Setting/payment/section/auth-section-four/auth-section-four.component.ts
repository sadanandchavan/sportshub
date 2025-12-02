import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-auth-section-four',
  standalone: true,
  imports: [],
  templateUrl: './auth-section-four.component.html',
  styleUrl: './auth-section-four.component.css'
})
export class AuthSectionFourComponent {
  @Output() previous = new EventEmitter<void>();

}
