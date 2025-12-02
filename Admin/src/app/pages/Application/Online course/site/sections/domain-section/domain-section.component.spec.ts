import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DomainSectionComponent } from './domain-section.component';

describe('DomainSectionComponent', () => {
  let component: DomainSectionComponent;
  let fixture: ComponentFixture<DomainSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DomainSectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DomainSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
