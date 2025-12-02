import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DtSourcesComponent } from './dt-sources.component';

describe('DtSourcesComponent', () => {
  let component: DtSourcesComponent;
  let fixture: ComponentFixture<DtSourcesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DtSourcesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DtSourcesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
