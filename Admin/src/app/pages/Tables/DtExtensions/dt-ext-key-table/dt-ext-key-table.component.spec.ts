import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DtExtKeyTableComponent } from './dt-ext-key-table.component';

describe('DtExtKeyTableComponent', () => {
  let component: DtExtKeyTableComponent;
  let fixture: ComponentFixture<DtExtKeyTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DtExtKeyTableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DtExtKeyTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
