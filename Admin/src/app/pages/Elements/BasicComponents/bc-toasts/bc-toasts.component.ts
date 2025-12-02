import { Component } from '@angular/core';
declare var bootstrap: any;

@Component({
  selector: 'app-bc-toasts',
  standalone: true,
  imports: [],
  templateUrl: './bc-toasts.component.html',
  styleUrl: './bc-toasts.component.css'
})
export class BcToastsComponent {
  showToast(): void {
    const toastElement = document.getElementById('liveToast');
    if (toastElement) {
      const toast = new bootstrap.Toast(toastElement);
      toast.show();
    }
  }

}
