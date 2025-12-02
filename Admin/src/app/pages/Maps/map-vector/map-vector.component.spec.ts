import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapVectorComponent } from './map-vector.component';

describe('MapVectorComponent', () => {
  let component: MapVectorComponent;
  let fixture: ComponentFixture<MapVectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MapVectorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MapVectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
