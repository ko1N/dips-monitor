import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ManagerPipelineDetailsResponse, ModelPipeline } from '../api/models';
import { PipelinesService } from '../api/services';

@Component({
  selector: 'app-pipeline-details',
  templateUrl: './pipeline-details.component.html',
  styleUrls: ['./pipeline-details.component.sass']
})
export class PipelineDetailsComponent implements OnInit, OnDestroy {

  public routeSub: any;
  public pipelineID: string;

  public pipeline: ModelPipeline;

  // script editor
  public editorOptions = { theme: 'vs-dark', language: 'yaml' };

  constructor(
    public route: ActivatedRoute,
    public router: Router,
    public pipelineApi: PipelinesService) { }

  ngOnInit(): void {
    this.routeSub = this.route.params.subscribe(params => {
      if (params.pipeline_id) {
        this.pipelineID = params.pipeline_id;
        this.loadDetails();
      }
    });
  }

  ngOnDestroy(): void {
    this.routeSub.unsubscribe();
  }

  loadDetails(): void {
    this.pipelineApi.pipelineDetails(this.pipelineID)
      .subscribe((resp: ManagerPipelineDetailsResponse) => {
        this.pipeline = resp.pipeline;
      });
  }

  save(): void {
    this.pipelineApi.pipelineUpdate({
      pipelineId: this.pipelineID,
      pipeline: this.pipeline.script
    } as PipelinesService.PipelineUpdateParams)
      .subscribe((resp: ManagerPipelineDetailsResponse) => {
        this.pipeline = resp.pipeline;
      });
  }

  close(): void {
    this.router.navigateByUrl('/pipelines');
  }

}
