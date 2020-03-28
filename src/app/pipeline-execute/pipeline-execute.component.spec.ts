import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PipelineExecuteComponent } from './pipeline-execute.component';

describe('PipelineExecuteComponent', () => {
  let component: PipelineExecuteComponent;
  let fixture: ComponentFixture<PipelineExecuteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PipelineExecuteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PipelineExecuteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
