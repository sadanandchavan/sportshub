import { Component, OnInit } from '@angular/core';
import { BreadcrumbComponent } from '../../../../layouts/breadcrumb/breadcrumb.component';
import { ClipboardService } from '../../../../service/clipboard.service';

@Component({
  selector: 'app-form-clipboard',
  standalone: true,
  imports: [BreadcrumbComponent],
  templateUrl: './form-clipboard.component.html',
  styleUrl: './form-clipboard.component.css'
})
export class FormClipboardComponent implements OnInit {
  constructor(private clipboardService: ClipboardService) {}

  ngOnInit(): void {
    // ClipboardJS is initialized in the service
  }
}

