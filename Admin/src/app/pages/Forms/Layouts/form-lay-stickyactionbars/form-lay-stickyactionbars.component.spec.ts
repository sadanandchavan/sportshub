import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormLayStickyactionbarsComponent } from './form-lay-stickyactionbars.component';

describe('FormLayStickyactionbarsComponent', () => {
  let component: FormLayStickyactionbarsComponent;
  let fixture: ComponentFixture<FormLayStickyactionbarsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormLayStickyactionbarsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormLayStickyactionbarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
