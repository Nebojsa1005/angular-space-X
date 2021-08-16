import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectedMissionComponent } from './selected-mission.component';

describe('SelectedMissionComponent', () => {
  let component: SelectedMissionComponent;
  let fixture: ComponentFixture<SelectedMissionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectedMissionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectedMissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
