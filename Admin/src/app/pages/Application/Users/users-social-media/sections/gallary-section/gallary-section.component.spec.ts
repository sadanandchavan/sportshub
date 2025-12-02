import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GallarySectionComponent } from './gallary-section.component';

describe('GallarySectionComponent', () => {
  let component: GallarySectionComponent;
  let fixture: ComponentFixture<GallarySectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GallarySectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GallarySectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
