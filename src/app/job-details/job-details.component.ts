import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { JobsService } from '../api/services';
import { ModelJob, PipelineTask, PipelineStage, ManagerJobDetailsResponse } from '../api/models';

@Component({
  selector: 'app-job-details',
  templateUrl: './job-details.component.html',
  styleUrls: ['./job-details.component.sass']
})
export class JobDetailsComponent implements OnInit, OnDestroy {

  public routeSub: any;
  public jobID: string;

  public timer: any;

  public job: ModelJob;
  public messages: string[];

  constructor(public route: ActivatedRoute, public jobsApi: JobsService) { }

  ngOnInit(): void {
    this.routeSub = this.route.params.subscribe(params => {
      if (params.job_id) {
        this.jobID = params.job_id;
        this.loadDetails();
        this.updateTimer();
      }
    });
  }

  ngOnDestroy(): void {
    if (this.timer !== null) {
      clearInterval(this.timer);
    }
    this.routeSub.unsubscribe();
  }

  loadDetails(): void {
    this.jobsApi.jobDetails(this.jobID)
      .subscribe((resp: ManagerJobDetailsResponse) => {
        this.job = resp.job;
        this.messages = resp.messages;
      });
  }

  updateTimer(): void {
    if (this.timer !== null) {
      clearInterval(this.timer);
    }
    this.timer = setInterval(() => {
      this.loadDetails();
    }, 1000);
  }

  trackStage(index: number, item: PipelineStage) {
    return index;
  }

  trackTask(index: number, item: PipelineTask) {
    return index;
  }

}
