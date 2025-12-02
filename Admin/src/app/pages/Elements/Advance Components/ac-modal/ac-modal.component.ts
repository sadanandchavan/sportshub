import { AfterViewInit, Component } from '@angular/core';
declare var bootstrap: any;

@Component({
  selector: 'app-ac-modal',
  standalone: true,
  imports: [],
  templateUrl: './ac-modal.component.html',
  styleUrl: './ac-modal.component.css'
})
export class AcModalComponent implements AfterViewInit {
  ngAfterViewInit(): void {
    // Initialize Bootstrap modals
    const modalTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="modal"]'));
    modalTriggerList.map((modalTriggerEl: HTMLElement) => new bootstrap.Modal(modalTriggerEl));
  }
}
