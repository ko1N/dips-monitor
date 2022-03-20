/* tslint:disable */
import { PipelineTask } from './pipeline-task';
export interface PipelineStage {
  name?: string;
  tasks?: Array<PipelineTask>;
}
