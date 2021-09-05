import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiChoiceOptionsComponent } from './multi-choice-options.component';

describe('MultiChoiceOptionsComponent', () => {
  let component: MultiChoiceOptionsComponent;
  let fixture: ComponentFixture<MultiChoiceOptionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MultiChoiceOptionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MultiChoiceOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
