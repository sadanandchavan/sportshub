import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SidebarService {
  constructor() {
    // Initialize sidebar visibility based on screen size
    this.checkScreenWidth(window.innerWidth);
    // Listen for window resize events
    window.addEventListener('resize', this.onResize.bind(this));
  }

  
  // BehaviorSubject to keep track of the sidebar state (hidden or visible)
  private sidebarHidden = new BehaviorSubject<boolean>(false);

  // Observable to expose the sidebar state
  sidebarHidden$ = this.sidebarHidden.asObservable();

  // Check screen width and update sidebar visibility
  private checkScreenWidth(width: number) {
    if (width <= 1024) {
      this.setSidebarVisibility(true);
    } else {
      this.setSidebarVisibility(false);
    }
  }

  // Handler for window resize event
  private onResize(event: Event) {
    const width = (event.target as Window).innerWidth;
    this.checkScreenWidth(width);
  }

  // Method to toggle the sidebar visibility
  toggleSidebar() {
    this.sidebarHidden.next(!this.sidebarHidden.value);
  }

  // Method to set the sidebar visibility explicitly
  setSidebarVisibility(hidden: boolean) {
    console.log('hidden',hidden);

    this.sidebarHidden.next(hidden);
  }
}
