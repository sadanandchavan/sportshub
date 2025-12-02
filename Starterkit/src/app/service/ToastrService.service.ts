import { Injectable } from '@angular/core';

declare var $: any; // Declare jQuery

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor() { }

  showNotification(message: string, type: string) {
    $.notify({ message: message }, { type: type });
  }
}
