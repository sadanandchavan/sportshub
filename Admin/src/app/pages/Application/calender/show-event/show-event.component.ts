import { Component, Input } from '@angular/core';
import { CalendarInfo, EventProccess } from '../model/calender';
import { NgbActiveModal, NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { SweetAlertService } from '../../../../service/sweetalert.service';

@Component({
  selector: 'app-show-event',
  standalone: true,
  imports: [CommonModule, NgbTooltipModule],
  templateUrl: './show-event.component.html',
  styleUrl: './show-event.component.css',
})
export class ShowEventComponent {
  @Input() event!: CalendarInfo;

  constructor(
    public activeModal: NgbActiveModal,
    private sweetAlertService: SweetAlertService
  ) {}

  ngOnInit() {
    console.log(this.event);
  }

  closeModal(result: number | null = null) {
    this.activeModal.close(result);
  }

  editEvent() {
    this.activeModal.close(EventProccess.EventEdit);
  }

  confirmDeleteEvent() {
    this.sweetAlertService
      .confirm('Are you sure', 'you want to delete this event?')
      .then((result) => {
        if (result.isConfirmed) {
          this.closeModal(EventProccess.EventDel);
        }
      });
  }
}
