import { Component } from '@angular/core';
import { BreadcrumbComponent } from '../../../layouts/breadcrumb/breadcrumb.component';
import { GoogleMapsModule } from '@angular/google-maps';

@Component({
  selector: 'app-map-gmap',
  standalone: true,
  imports: [BreadcrumbComponent, GoogleMapsModule],
  templateUrl: './map-gmap.component.html',
  styleUrl: './map-gmap.component.css',
})
export class MapGmapComponent {
  zoom = 8;
  center: google.maps.LatLngLiteral = { lat: -34.397, lng: 150.644 };
}
