import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcSyntaxHighlighterComponent } from './ac-syntax-highlighter.component';

describe('AcSyntaxHighlighterComponent', () => {
  let component: AcSyntaxHighlighterComponent;
  let fixture: ComponentFixture<AcSyntaxHighlighterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AcSyntaxHighlighterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AcSyntaxHighlighterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
