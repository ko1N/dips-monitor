import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { JobDetailsComponent } from './job-details/job-details.component';
import { JobListComponent } from './job-list/job-list.component';
import { PipelineDetailsComponent } from './pipeline-details/pipeline-details.component';
import { PipelineListComponent } from './pipeline-list/pipeline-list.component';

const routes: Routes = [
  { path: '', redirectTo: 'pipelines', pathMatch: 'full' },
  { path: 'pipelines', component: PipelineListComponent },
  { path: 'pipeline/:pipeline_id', component: PipelineDetailsComponent },
  { path: 'jobs', component: JobListComponent },
  { path: 'job/:job_id', component: JobDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
