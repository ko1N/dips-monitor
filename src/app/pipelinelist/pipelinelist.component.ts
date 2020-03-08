import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';

import { ManagerPipelineListResponse, ModelPipeline, ManagerSuccessResponse } from '../api/models';
import { PipelinesService } from '../api/services';

@Component({
  selector: 'app-pipelinelist',
  templateUrl: './pipelinelist.component.html',
  styleUrls: ['./pipelinelist.component.sass']
})
export class PipelinelistComponent implements OnInit {

  public displayedColumns: string[] = ['id', 'name', 'options'];

  public pipelines: Array<ModelPipeline>;
  public dataSource = new MatTableDataSource<ModelPipeline>(this.pipelines);
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  constructor(public router: Router, public pipelineApi: PipelinesService) { }

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

  deleteRow(element: ModelPipeline): void {
    // TODO: confirm delete dialog
    this.pipelineApi.pipelineDelete(element.id)
      .subscribe((resp: ManagerSuccessResponse) => {
        // TODO: remove element client sided
      });
  }

}
