import { Injectable, OnDestroy } from '@angular/core';
import ClipboardJS from 'clipboard';

@Injectable({
  providedIn: 'root'
})
export class ClipboardService implements OnDestroy {
  private clipboard: ClipboardJS | undefined;

  constructor() {
    this.initializeClipboard();
  }

  private initializeClipboard() {
    this.clipboard = new ClipboardJS('[data-clipboard=true]');

    this.clipboard.on('success', (e: ClipboardJS.Event) => {
      e.clearSelection();
      alert('Copied!');
    });

    this.clipboard.on('error', (e: ClipboardJS.Event) => {
      console.error('ClipboardJS error:', e);
    });
  }

  ngOnDestroy() {
    this.clipboard?.destroy();
  }
}
