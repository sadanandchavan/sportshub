import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditorClassicComponent } from './editor-classic.component';

describe('EditorClassicComponent', () => {
  let component: EditorClassicComponent;
  let fixture: ComponentFixture<EditorClassicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditorClassicComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditorClassicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
