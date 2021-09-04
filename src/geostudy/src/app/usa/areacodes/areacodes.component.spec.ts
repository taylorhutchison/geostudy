import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AreacodesComponent } from './areacodes.component';

describe('AreacodesComponent', () => {
  let component: AreacodesComponent;
  let fixture: ComponentFixture<AreacodesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AreacodesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AreacodesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
