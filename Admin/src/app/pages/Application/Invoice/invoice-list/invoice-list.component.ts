import { Component } from '@angular/core';
import { BreadcrumbComponent } from '../../../../layouts/breadcrumb/breadcrumb.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-invoice-list',
  standalone: true,
  imports: [BreadcrumbComponent, CommonModule],
  templateUrl: './invoice-list.component.html',
  styleUrl: './invoice-list.component.css'
})
export class InvoiceListComponent {

  invoiceList = [
    {
      "customerName": "Addie Bass",
      "status": "danger",
      "amount": "$20,000",
      "txid": "#63579067848912",
      "quantity": 10,
      "paymentMethod": "Mastercard",
      "avatar": "../assets/images/user/avatar-1.jpg",
      "paymentMethodIcon": "../assets/images/application/img-mastercard.svg"
    },
    {
      "customerName": "Mickie Melmoth",
      "status": "warning",
      "amount": "$20,000",
      "txid": "#63579067848912",
      "quantity": 10,
      "paymentMethod": "Mastercard",
      "avatar": "../assets/images/user/avatar-2.jpg",
      "paymentMethodIcon": "../assets/images/application/img-mastercard.svg"
    },
    {
      "customerName": "Abey Boseley",
      "status": "success",
      "amount": "$20,000",
      "txid": "#63579067848912",
      "quantity": 10,
      "paymentMethod": "Mastercard",
      "avatar": "../assets/images/user/avatar-3.jpg",
      "paymentMethodIcon": "../assets/images/application/img-mastercard.svg"
    },
    {
      "customerName": "Addie Bass",
      "status": "danger",
      "amount": "$20,000",
      "txid": "#63579067848912",
      "quantity": 10,
      "paymentMethod": "Mastercard",
      "avatar": "../assets/images/user/avatar-4.jpg",
      "paymentMethodIcon": "../assets/images/application/img-mastercard.svg"
    },
    {
      "customerName": "Addie Bass",
      "status": "danger",
      "amount": "$20,000",
      "txid": "#63579067848912",
      "quantity": 10,
      "paymentMethod": "Mastercard",
      "avatar": "../assets/images/user/avatar-5.jpg",
      "paymentMethodIcon": "../assets/images/application/img-mastercard.svg"
    }
  ]


}
