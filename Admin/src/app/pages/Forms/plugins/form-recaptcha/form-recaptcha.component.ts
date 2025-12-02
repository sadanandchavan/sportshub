import { Component, OnInit } from '@angular/core';
import { BreadcrumbComponent } from '../../../../layouts/breadcrumb/breadcrumb.component';

@Component({
  selector: 'app-form-recaptcha',
  standalone: true,
  imports: [BreadcrumbComponent],
  templateUrl: './form-recaptcha.component.html',
  styleUrl: './form-recaptcha.component.css'
})
export class FormRecaptchaComponent implements OnInit {
  siteKey: string = '6LdnLwgUAAAAAAIb9L3PQlHQgvSCi16sYgbMIMFR'; // Your reCAPTCHA site key

  constructor() { }

  ngOnInit(): void {
    // Load the reCAPTCHA script dynamically
    this.loadRecaptchaScript();
  }

  loadRecaptchaScript(): void {
    const script = document.createElement('script');
    script.src = 'https://www.google.com/recaptcha/api.js';
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
  }
}
