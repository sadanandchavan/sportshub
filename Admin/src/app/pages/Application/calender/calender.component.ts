import { ChangeDetectorRef, Component, HostListener, ViewChild } from '@angular/core';
import { Calendar, CalendarOptions } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import timeGridPlugin from '@fullcalendar/timegrid';
import { BreadcrumbComponent } from '../../../layouts/breadcrumb/breadcrumb.component';
import { AddEditCalenderInfoComponent } from './add-edit-calender-info/add-edit-calender-info.component';
import { CalendarInfo, EventProccess, OpenPopupType } from './model/calender';
import { FullCalendarComponent, FullCalendarModule } from '@fullcalendar/angular';
import { CommonModule } from '@angular/common';
import { ShowEventComponent } from "./show-event/show-event.component";
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { SweetAlertService } from '../../../service/sweetalert.service';

@Component({
  selector: 'app-calender',
  standalone: true,
  imports: [BreadcrumbComponent, AddEditCalenderInfoComponent, CommonModule, FullCalendarModule, ShowEventComponent],
  templateUrl: './calender.component.html',
  styleUrls: ['./calender.component.css']
})
export class CalenderComponent {

  constructor(private modalService: NgbModal, private sweetAlertService: SweetAlertService) { }

  selectedEvent!: CalendarInfo;
  @ViewChild(FullCalendarComponent) calendarComponent!: FullCalendarComponent;

  eventsList: CalendarInfo[] = [
    {
      title: 'All Day Event',
      start: '2024-08-07',
      end: '2024-08-07',
      allDay: true,
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      venue: 'City Town',
      className: 'event-warning'
    },
    {
      title: 'All Day Event2',
      start: '2024-08-07',
      end: '2024-08-10',
      allDay: true,
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      venue: 'City Town',
      className: 'event-warning'
    }
  ];

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent): void {
    console.log('cl');
    this.currantllyOpenPopup = OpenPopupType.NoPopupOpen;
  }

  calendarOptions: CalendarOptions = {
    plugins: [dayGridPlugin, interactionPlugin, timeGridPlugin],
    headerToolbar: {
      left: 'prev,next today',
      center: 'title',
      right: 'dayGridMonth,timeGridWeek,timeGridDay'
    },
    initialView: 'dayGridMonth',
    events: this.eventsList,
    dateClick: this.handleDateClick.bind(this),
    eventClick: this.handleEventClick.bind(this),
  };

  AddOrEditPopup = OpenPopupType.AddOrEditPopup;
  ShowEventPopup = OpenPopupType.ShowEventPopup;
  ConfirmationPopup = OpenPopupType.ConfirmationPopup;
  currantllyOpenPopup: OpenPopupType = OpenPopupType.NoPopupOpen;

  ngAfterViewInit() { }

  handleDateClick(info: any) {

    this.selectedEvent = {
      title: '',
      description: '',
      venue: '',
      start: info.dateStr,
      end: '',
      className: ''
    };

    this.currantllyOpenPopup = OpenPopupType.AddOrEditPopup;
  }

  handleEventClick(info: any) {
    this.selectedEvent = {
      title: info.event.title,
      description: info.event.extendedProps.description,
      venue: info.event.extendedProps.venue,
      start: info.event.startStr,
      end: info.event.endStr,
      className: info.event.classNames.join(' ')
    };

    this.openModal();
  }

  onEventAdded(eventData: any) {
    if (eventData.index !== null) {
      this.edit(eventData.index, eventData);
      delete eventData.index;
    } else {
      this.add(eventData);
    }

    this.currantllyOpenPopup = OpenPopupType.NoPopupOpen;
  }

  edit(index: number, data: CalendarInfo) {
    this.eventsList[index] = data;

    this.refreshCalendar();
    this.swallSuccess('Event Updated successfully.');
  }

  add(data: CalendarInfo) {
    this.eventsList.push(data);

    this.refreshCalendar();
    this.swallSuccess('Event Updated successfully.');
  }

  closeAddOrEditPopup(data:any) {
    this.currantllyOpenPopup = OpenPopupType.NoPopupOpen;
  }

  openModal() {
    const modalRef = this.modalService.open(ShowEventComponent, { centered: true });
    modalRef.componentInstance.event = this.selectedEvent;

    modalRef.result.then((result: EventProccess) => {

      const index = this.eventsList.findIndex(ev => ev.title === this.selectedEvent.title && ev.start && this.selectedEvent.start);

      if (result === EventProccess.EventDel) {
        this.eventsList.splice(index, 1);
        this.refreshCalendar();
        this.swallSuccess();
      }
      if (result === EventProccess.EventEdit) {
        this.currantllyOpenPopup = this.AddOrEditPopup;
        this.selectedEvent['index'] = index;
      }
    }, (reason) => {});
  }

  swallSuccess(dec: string ='Event Deleted successfully') {
    this.sweetAlertService.success('Success', dec)
      .then((result) => {});
  }

  refreshCalendar() {
    if (this.calendarComponent) {
      this.calendarComponent.getApi().removeAllEvents();
      this.calendarComponent.getApi().addEventSource(this.eventsList);
    }
  }
}
