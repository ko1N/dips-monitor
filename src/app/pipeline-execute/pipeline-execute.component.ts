import { Component, OnInit, OnDestroy } from '@angular/core';
import { ModelPipeline, ManagerPipelineDetailsResponse, ManagerPipelineExecuteRequest, ManagerSuccessResponse, ManagerPipelineExecuteResponse } from '../api/models';
import { ActivatedRoute, Router } from '@angular/router';
import { PipelinesService } from '../api/services';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-pipeline-execute',
  templateUrl: './pipeline-execute.component.html',
  styleUrls: ['./pipeline-execute.component.sass']
})
export class PipelineExecuteComponent implements OnInit, OnDestroy {

  public routeSub: any;
  public pipelineID: string;

  public pipeline: ModelPipeline;

  public parameters: FormGroup;

  constructor(
    public route: ActivatedRoute,
    public router: Router,
    public pipelineApi: PipelinesService) {
  }

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
        // update pipeline
        this.pipeline = resp.pipeline;

        // rebuild form
        let form = {};
        for (let p of this.pipeline.pipeline.parameters) {
          form[p] = new FormControl('', Validators.required);
        }
        this.parameters = new FormGroup(form);
      });
  }

  execute(): void {
    this.pipelineApi.pipelineExecute({
      pipelineId: this.pipeline.id,
      executeRequest: {
        name: `${this.pipeline.name} (via webclient)`,
        parameters: this.parameters.value,
      } as ManagerPipelineExecuteRequest,
    } as PipelinesService.PipelineExecuteParams)
      .subscribe((resp: ManagerPipelineExecuteResponse) => {
        this.router.navigateByUrl(`/jobs`);
      });
  }

  close(): void {
    this.router.navigateByUrl('/pipelines');
  }

}
