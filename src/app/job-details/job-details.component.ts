import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { JobsService } from '../api/services';
import { ManagerJobInfoResponse, ModelJob, PipelineTask, PipelineStage } from '../api/models';

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
    this.routeSub.unsubscribe();
  }

  loadDetails(): void {
    this.jobsApi.jobDetails(this.jobID)
      .subscribe((resp: ManagerJobInfoResponse) => {
        this.job = resp.job;
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
