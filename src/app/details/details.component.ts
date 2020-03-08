import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { JobsService } from '../api/services';
import { ManagerJobInfoResponse, ModelJob } from '../api/models';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.sass']
})
export class DetailsComponent implements OnInit, OnDestroy {

  public routeSub: any;
  public jobID: string;

  public timer: any;

  public job: ModelJob;

  constructor(public route: ActivatedRoute, public api: JobsService) { }

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
    this.api.jobInfo(this.jobID)
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
  
  /*
  trackStage(index: number, item: ModelJobStage) {
    return index;
  }

  trackTask(index: number, item: ModelJobStageTask) {
    return item.id;
  }
  */

}
