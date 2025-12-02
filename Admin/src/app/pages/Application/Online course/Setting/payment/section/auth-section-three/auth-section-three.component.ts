import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-auth-section-three',
  standalone: true,
  imports: [],
  templateUrl: './auth-section-three.component.html',
  styleUrl: './auth-section-three.component.css'
})
export class AuthSectionThreeComponent {

  @Output() previous = new EventEmitter<void>();
  @Output() next = new EventEmitter<void>();

}
