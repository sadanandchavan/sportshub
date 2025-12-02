import { Component } from '@angular/core';

@Component({
  selector: 'app-bc-alert',
  standalone: true,
  imports: [],
  templateUrl: './bc-alert.component.html',
  styleUrl: './bc-alert.component.css'
})
export class BcAlertComponent {
  showAlert(): void {
    alert('Nice, you triggered this alert message!');
  }
}
