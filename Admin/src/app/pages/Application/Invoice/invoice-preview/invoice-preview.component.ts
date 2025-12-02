import { Component, Renderer2 } from '@angular/core';
import { BreadcrumbComponent } from '../../../../layouts/breadcrumb/breadcrumb.component';

@Component({
  selector: 'app-invoice-preview',
  standalone: true,
  imports: [BreadcrumbComponent],
  templateUrl: './invoice-preview.component.html',
  styleUrl: './invoice-preview.component.css'
})
export class InvoicePreviewComponent {

  constructor(private renderer: Renderer2) { }


  printInvoice(): void {
    // Create a new link element
    const link = this.renderer.createElement('link');
    this.renderer.setAttribute(link, 'rel', 'stylesheet');
    this.renderer.setAttribute(link, 'type', 'text/css');
    this.renderer.setAttribute(link, 'media', 'print');
    this.renderer.setAttribute(link, 'href', 'data:text/css;charset=utf-8,' + encodeURIComponent(`
      @media print {
        *, ::after, ::before {
          text-shadow: none !important;
          box-shadow: none !important;
        }
        a:not(.btn) {
          text-decoration: none;
        }
        abbr[title]::after {
          content: " (" attr(title) ")";
        }
        pre {
          white-space: pre-wrap !important;
        }
        blockquote, pre {
          border: 1px solid #adb5bd;
          page-break-inside: avoid;
        }
        thead {
          display: table-header-group;
        }
        img, tr {
          page-break-inside: avoid;
        }
        h2, h3, p {
          orphans: 3;
          widows: 3;
        }
        h2, h3 {
          page-break-after: avoid;
        }
        @page {
          size: a3;
        }
        body {
          min-width: 992px !important;
        }
        .container {
          min-width: 992px !important;
        }
        .page-header, .pc-sidebar, .pc-mob-header, .pc-header, .pct-customizer, .modal, .navbar {
          display: none;
        }
        .pc-container {
          top: 0;
        }
        .invoice-contact {
          padding-top: 0;
        }
        @page, .card-body, .card-header, body, .pcoded-content {
          padding: 0;
          margin: 0;
        }
        .badge {
          border: 1px solid #000;
        }
        .table {
          border-collapse: collapse !important;
        }
        .table td, .table th {
          background-color: #fff !important;
        }
        .table-bordered td, .table-bordered th {
          border: 1px solid #dee2e6 !important;
        }
        .table-dark {
          color: inherit;
        }
        .table-dark tbody + tbody, .table-dark td, .table-dark th, .table-dark thead th {
          border-color: #dee2e6;
        }
        .table .thead-dark th {
          color: inherit;
          border-color: #dee2e6;
        }
      `));
    this.renderer.appendChild(document.head, link);

    // Print the section
    window.print();
  }

}
