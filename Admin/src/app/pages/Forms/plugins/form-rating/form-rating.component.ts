import { ChangeDetectorRef, Component, OnChanges, SimpleChanges, ViewChild } from '@angular/core';
import { BreadcrumbComponent } from '../../../../layouts/breadcrumb/breadcrumb.component';
import { NgbModule, NgbRatingModule, NgbTooltip, NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-form-rating',
  standalone: true,
  imports: [BreadcrumbComponent,NgbRatingModule,NgbTooltipModule,CommonModule,NgbModule],
  templateUrl: './form-rating.component.html',
  styleUrl: './form-rating.component.css'
})
export class FormRatingComponent {
  @ViewChild(NgbTooltip) tooltip: NgbTooltip;

  rating: number = 0;
  tooltipTextData: string = 'Select rating';

  onRateChange(newRating: number): void {
    this.rating = newRating;
    this.updateTooltip();
  }

  private updateTooltip(): void {
    this.tooltipTextData = this.rating !== undefined ? `Rating: ${this.rating}` : 'Select rating';
    // Optionally, you can manually show or hide the tooltip
    this.tooltip.open();
  }

}
