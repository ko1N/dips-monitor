import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';

import {
  ManagerPipelineCreateResponse,
  ManagerPipelineExecuteRequest,
  ManagerPipelineListResponse,
  ManagerSuccessResponse,
  ModelPipeline,
} from '../api/models';
import { PipelinesService } from '../api/services';

@Component({
  selector: 'app-pipeline-list',
  templateUrl: './pipeline-list.component.html',
  styleUrls: ['./pipeline-list.component.sass']
})
export class PipelineListComponent implements OnInit {

  public displayedColumns: string[] = ['id', 'name', 'options'];

  public pipelines: Array<ModelPipeline>;
  public dataSource = new MatTableDataSource<ModelPipeline>(this.pipelines);
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  constructor(
    public router: Router,
    public pipelineApi: PipelinesService) { }

  ngOnInit(): void {
    this.loadOverview();
  }

  loadOverview(): void {
    this.pipelineApi.pipelineList()
      .subscribe((resp: ManagerPipelineListResponse) => {
        this.pipelines = resp.pipelines;
        this.updateDatasource();
      });
  }

  updateDatasource(): void {
    this.dataSource = new MatTableDataSource<ModelPipeline>(this.pipelines);
    this.dataSource.paginator = this.paginator;
  }

  createPipeline(): void {
    this.pipelineApi.pipelineCreate(`---\nname: unnamed`)
      .subscribe((resp: ManagerPipelineCreateResponse) => {
        this.router.navigateByUrl(`/pipeline/${resp.pipeline.id}`);
      });
  }

  deletePipeline(element: ModelPipeline): void {
    // TODO: confirm delete dialog
    this.pipelineApi.pipelineDelete(element.id)
      .subscribe((resp: ManagerSuccessResponse) => {
        // TODO: remove element client sided
      });
  }

}
