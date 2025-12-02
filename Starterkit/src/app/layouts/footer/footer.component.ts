import { Component } from '@angular/core';
import { SidebarService } from '../../service/sidebar.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
})
export class FooterComponent {
  isSidebarHidden = false;

  constructor(private sidebarService: SidebarService) {}

  ngOnInit(): void {
    this.sidebarService.sidebarHidden$.subscribe((hidden) => {
      this.isSidebarHidden = hidden;
    });
  }
}
