import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapGmapComponent } from './map-gmap.component';

describe('MapGmapComponent', () => {
  let component: MapGmapComponent;
  let fixture: ComponentFixture<MapGmapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MapGmapComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MapGmapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
