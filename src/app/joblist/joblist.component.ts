import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';

import { ModelJob } from '../api/models';
import { JobsService } from '../api/services';

@Component({
  selector: 'app-joblist',
  templateUrl: './joblist.component.html',
  styleUrls: ['./joblist.component.sass']
})
export class JoblistComponent implements OnInit {

  public displayedColumns: string[] = ['id', 'name', 'status', 'progress'];

  public jobs: Array<ModelJob>;
  public dataSource = new MatTableDataSource<ModelJob>(this.jobs);
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  constructor(public router: Router, public jobsApi: JobsService) { }

  ngOnInit(): void {
    this.loadOverview();
  }

  loadOverview(): void {
    /*
    this.jobsApi.jobList()
      .subscribe((resp: ManagerJobListResponse) => {
        this.jobs = resp.jobs;
        this.updateDatasource();
      })
      */
  }

  updateDatasource(): void {
    this.dataSource = new MatTableDataSource<ModelJob>(this.jobs);
    this.dataSource.paginator = this.paginator;
  }

  onRowClicked(row: ModelJob): void {
    this.router.navigate([`/details/${row.id}`]);
  }
}
