import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CalendarInfo } from '../model/calender';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-add-edit-calender-info',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './add-edit-calender-info.component.html',
  styleUrl: './add-edit-calender-info.component.css'
})
export class AddEditCalenderInfoComponent {

  @Input() calenderData: CalendarInfo | {} = {};
  @Output() eventAdded = new EventEmitter<any>();
  @Output() close = new EventEmitter<any>();


  typeArry = [
    { text: 'Type', className: 'event-primary' },
    { text: 'Primary', className: 'event-primary' },
    { text: 'Secondary', className: 'event-warning' },
    { text: 'Success', className: 'event-success' },
    { text: 'Danger', className: 'event-danger' },
    { text: 'Info', className: 'event-info' },
  ];
  
  formGroup: FormGroup;
  
  constructor(
    public fb:FormBuilder
  ) {
    this.formGroup = this.fb.group({
      title: new FormControl('', Validators.required),
      start: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
      venue: new FormControl('', Validators.required),
      className: new FormControl('', Validators.required),
      index: new FormControl(null, Validators.required),
    })
  }

  ngOnInit() {
    if (this.calenderData) {
      this.formGroup.patchValue(this.calenderData);
    }
    console.log(this.formGroup.value ,'this.calenderData');
  }

  addOrEdit() {
    this.eventAdded.emit(this.formGroup.value);
  }

  closeModal() {
    this.close.emit(true)
  }
}
