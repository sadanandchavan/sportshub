import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BcPaginationComponent } from './bc-pagination.component';

describe('BcPaginationComponent', () => {
  let component: BcPaginationComponent;
  let fixture: ComponentFixture<BcPaginationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BcPaginationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BcPaginationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
