import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormMegaoptionComponent } from './form-megaoption.component';

describe('FormMegaoptionComponent', () => {
  let component: FormMegaoptionComponent;
  let fixture: ComponentFixture<FormMegaoptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormMegaoptionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormMegaoptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
