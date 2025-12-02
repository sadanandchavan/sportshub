import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DtPluginComponent } from './dt-plugin.component';

describe('DtPluginComponent', () => {
  let component: DtPluginComponent;
  let fixture: ComponentFixture<DtPluginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DtPluginComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DtPluginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
