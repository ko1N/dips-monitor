import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetailsComponent } from './details/details.component';
import { JoblistComponent } from './joblist/joblist.component';
import { PipelinelistComponent } from './pipelinelist/pipelinelist.component';
import { PipelineDetailsComponent } from './pipeline-details/pipeline-details.component';


const routes: Routes = [
  { path: '', redirectTo: 'pipelines', pathMatch: 'full' },
  { path: 'pipelines', component: PipelinelistComponent },
  { path: 'pipeline/:pipeline_id', component: PipelineDetailsComponent },
  { path: 'jobs', component: JoblistComponent },
  { path: 'details/:job_id', component: DetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
