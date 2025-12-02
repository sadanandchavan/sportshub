import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BcTabsComponent } from './bc-tabs.component';

describe('BcTabsComponent', () => {
  let component: BcTabsComponent;
  let fixture: ComponentFixture<BcTabsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BcTabsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BcTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
