import { AfterViewInit, Component } from '@angular/core';
import { BreadcrumbComponent } from '../../../layouts/breadcrumb/breadcrumb.component';
import 'jsvectormap';
import 'jsvectormap/dist/maps/world.js';
import '../../../../assets/plugins/map/world-merc.js';
import '../../../../assets/plugins/map/canada.js';
import '../../../../assets/plugins/map/iraq.js';
import '../../../../assets/plugins/map/italy.js';
import '../../../../assets/plugins/map/russia.js';
import '../../../../assets/plugins/map/spain.js';
// import '../../../../assets/plugins/map/us-aea-en.js';
// import '../../../../assets/plugins/map/us-lcc-en.js';
// import '../../../../assets/plugins/map/us-merc-en.js';
// import '../../../../assets/plugins/map/us-mill-en.js';
// import '../../../../assets/plugins/map/map-vector.js';
import jsVectorMap from 'jsvectormap';

@Component({
  selector: 'app-map-vector',
  standalone: true,
  imports: [BreadcrumbComponent],
  templateUrl: './map-vector.component.html',
  styleUrl: './map-vector.component.css',
})
export class MapVectorComponent implements AfterViewInit {
  ngAfterViewInit() {
    this.initMap();
  }

  initMap() {

    const mapsConfig = [
      {
        selector: '#world-map-markers',
        map: 'world',
        markersSelectable: true,
        markers: [
          {
            coords: [-14.235, -51.9253],
          },
          {
            coords: [35.8617, 104.1954],
          },
          {
            coords: [61, 105],
          },
          {
            coords: [26.8206, 30.8025],
          },
        ],
        markerStyle: {
          initial: {
            fill: '#3f4d67',
          },
          hover: {
            fill: '#04a9f5',
          },
        },
        markerLabelStyle: {
          initial: {
            fontFamily: "'Inter', sans-serif",
            fontSize: 13,
            fontWeight: 500,
            fill: '#3f4d67',
          },
        },
      },
      // { selector: '#world-merc', map: 'world-merc' },
      { selector: '#canada', map: 'canada' },
      { selector: '#iraq', map: 'iraq' },
      { selector: '#italy', map: 'italy' },
      { selector: '#russia', map: 'russia' },
      { selector: '#spain', map: 'spain' },
      // { selector: '#us-aea-en', map: 'us-aea-en' },
      // { selector: '#us-lcc-en', map: 'us-lcc-en' },
      // { selector: '#us-merc-en', map: 'us-merc-en' },
      // { selector: '#us-mill-en', map: 'us-mill-en' },
    ];

    mapsConfig.forEach(config => {
      new jsVectorMap({
        selector: config.selector,
        map: config.map,
        markers: config.markers || [],
        markerStyle: config.markerStyle || {},
        markerLabelStyle:config.markerLabelStyle || {},
      });
    });
  }
}
