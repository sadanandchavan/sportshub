import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BcCollapseComponent } from './bc-collapse.component';

describe('BcCollapseComponent', () => {
  let component: BcCollapseComponent;
  let fixture: ComponentFixture<BcCollapseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BcCollapseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BcCollapseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
