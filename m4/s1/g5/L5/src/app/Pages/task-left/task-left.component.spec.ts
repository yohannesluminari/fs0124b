import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskLeftComponent } from './task-left.component';

describe('TaskLeftComponent', () => {
  let component: TaskLeftComponent;
  let fixture: ComponentFixture<TaskLeftComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TaskLeftComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TaskLeftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
