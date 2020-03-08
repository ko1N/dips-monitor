import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PipelinelistComponent } from './pipelinelist.component';

describe('PipelinelistComponent', () => {
  let component: PipelinelistComponent;
  let fixture: ComponentFixture<PipelinelistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PipelinelistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PipelinelistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
