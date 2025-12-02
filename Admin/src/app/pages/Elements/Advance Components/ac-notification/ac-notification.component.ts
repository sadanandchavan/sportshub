import { Component } from '@angular/core';
import { SweetAlertService } from '../../../../service/sweetalert.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-ac-notification',
  standalone: true,
  imports: [],
  templateUrl: './ac-notification.component.html',
  styleUrl: './ac-notification.component.css',
})
export class AcNotificationComponent {
  constructor(public sweetAlertService: SweetAlertService) {}
  showSuccessToast() {
    this.sweetAlertService.showToastWithout(
      'Default!',
      '#f8f9fa',
      '#212529'
    );
  }

  showSuccessToast1() {
    this.sweetAlertService.showToastWithout(
      'Reminder!',
      '#17a2b8',
      '#fff'
    );
  }

  showSuccessToast2() {
    this.sweetAlertService.showToastWithout(
      'Well Done!',
      '#28a745',
      '#fff'
    );
  }

  showSuccessToast3() {
    this.sweetAlertService.showToastWithout(
      'Warning!',
      '#ffc107',
      '#212529'
    );
  }

  showSuccessToast4() {
    this.sweetAlertService.showToastWithout(
      'Sorry!',
      '#dc3545',
      '#fff'
    );
  }

  showSuccessToasta1() {
    this.sweetAlertService.showToast('success', 'Signed in successfully');
  }

  showSuccessToasta2() {
    this.sweetAlertService.showToast('info', 'Signed in successfully');
  }

  showSuccessToasta3() {
    this.sweetAlertService.showToast('success', 'Signed in successfully');
  }

  showSuccessToasta4() {
    this.sweetAlertService.showToast('warning', 'Signed in successfully');
  }

  showSuccessToasta5() {
    this.sweetAlertService.showToast('error', 'Signed in successfully');
  }

  private toastCount = 0; // Track the number of toasts

  showToast3(icon: 'success' | 'error' | 'warning' | 'info', title: string) {
    this.toastCount++;

    const verticalPosition = 20 + (this.toastCount - 1) * 70; // Adjust as needed

    const Toast = Swal.mixin({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer);
        toast.addEventListener('mouseleave', Swal.resumeTimer);

        const toastElement = toast.querySelector('.swal2-toast') as HTMLElement;
        if (toastElement) {
          toastElement.style.top = `${verticalPosition}px`;
        }
      },
      willClose: () => {
        this.toastCount--;
      },
    });

    Toast.fire({
      icon: icon,
      title: title,
    });
  }


  showSuccessToastb1() {
    this.sweetAlertService.showToast('success', 'Signed in successfully');
  }
  showSuccessToastb2() {
    this.sweetAlertService.showToast('info', 'Signed in successfully');
  }
  showSuccessToastb3() {
    this.sweetAlertService.showToast('success', 'Signed in successfully');
  }
  showSuccessToastb4() {
    this.sweetAlertService.showToast('warning', 'Signed in successfully');
  }
  showSuccessToastb5() {
    this.sweetAlertService.showToast('error', 'Signed in successfully');
  }
}
