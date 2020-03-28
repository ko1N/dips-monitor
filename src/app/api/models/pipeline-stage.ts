/* tslint:disable */
import { PipelineTask } from './pipeline-task';
export interface PipelineStage {
  environment?: string;
  name?: string;
  tasks?: Array<PipelineTask>;
}
