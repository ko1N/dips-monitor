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
  public job: ModelJob;

  constructor(public route: ActivatedRoute, public api: JobsService) { }

  ngOnInit(): void {
    this.routeSub = this.route.params.subscribe(params => {
      if (params.job_id) {
        this.api.jobInfo(params.job_id)
        .subscribe((resp: ManagerJobInfoResponse) => {
          this.job = resp.job;
        });
      }
    });
  }

  ngOnDestroy(): void {
    this.routeSub.unsubscribe();
  }

}
