import { Component, OnInit, OnDestroy } from '@angular/core';
import { ModelPipeline, ManagerPipelineDetailsResponse, ManagerPipelineExecuteRequest, ManagerSuccessResponse } from '../api/models';
import { ActivatedRoute, Router } from '@angular/router';
import { PipelinesService } from '../api/services';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-pipeline-execute',
  templateUrl: './pipeline-execute.component.html',
  styleUrls: ['./pipeline-execute.component.sass']
})
export class PipelineExecuteComponent implements OnInit, OnDestroy {

  public routeSub: any;
  public pipelineID: string;

  public pipeline: ModelPipeline;

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

  execute(): void {
    this.pipelineApi.pipelineExecute({
      pipelineId: this.pipeline.id,
      executeRequest: {
        name: `${this.pipeline.name} (via webclient)`,
        //parameters:
      } as ManagerPipelineExecuteRequest,
    } as PipelinesService.PipelineExecuteParams)
      .subscribe((resp: ManagerSuccessResponse) => {
        this.router.navigateByUrl(`/jobs`);
      });
  }

  close(): void {
    this.router.navigateByUrl('/pipelines');
  }

}
