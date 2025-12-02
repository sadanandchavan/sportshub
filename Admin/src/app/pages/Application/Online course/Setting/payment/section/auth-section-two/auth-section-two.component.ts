import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-auth-section-two',
  standalone: true,
  imports: [],
  templateUrl: './auth-section-two.component.html',
  styleUrl: './auth-section-two.component.css'
})
export class AuthSectionTwoComponent {

  @Output() previous = new EventEmitter<void>();
  @Output() next = new EventEmitter<void>();

}
