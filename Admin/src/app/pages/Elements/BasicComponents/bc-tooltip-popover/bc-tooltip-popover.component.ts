import { AfterViewInit, Component } from '@angular/core';
declare var bootstrap: any;
@Component({
  selector: 'app-bc-tooltip-popover',
  standalone: true,
  imports: [],
  templateUrl: './bc-tooltip-popover.component.html',
  styleUrl: './bc-tooltip-popover.component.css',
})
export class BcTooltipPopoverComponent implements AfterViewInit {
  ngAfterViewInit(): void {
    // Initialize Bootstrap tooltips
    const tooltipTriggerList = [].slice.call(
      document.querySelectorAll('[data-bs-toggle="tooltip"]')
    );
    tooltipTriggerList.map(
      (tooltipTriggerEl: HTMLElement) => new bootstrap.Tooltip(tooltipTriggerEl)
    );
    const popoverTriggerList = [].slice.call(
      document.querySelectorAll('[data-bs-toggle="popover"]')
    );
    popoverTriggerList.map(
      (popoverTriggerEl: HTMLElement) => new bootstrap.Popover(popoverTriggerEl)
    );
  }
}
