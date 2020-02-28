import { Component, OnInit, ViewChild } from '@angular/core';
import { RestJobListResponse, ModelJob } from '../api/models';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { ApiService } from '../api/services';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.sass']
})
export class OverviewComponent implements OnInit {

  public displayedColumns: string[] = ['id', 'pipeline', 'status', 'progress'];

  public jobs: Array<ModelJob>;
  public dataSource = new MatTableDataSource<ModelJob>(this.jobs);
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  constructor(public api: ApiService) { }

  ngOnInit(): void {
    this.loadOverview();
  }

  loadOverview(): void {
    this.api.jobList()
      .subscribe((resp: RestJobListResponse) => {
        this.jobs = resp.jobs;
        this.updateDatasource();
      })
  }

  updateDatasource(): void {
    this.dataSource = new MatTableDataSource<ModelJob>(this.jobs);
    this.dataSource.paginator = this.paginator;
  }

}
