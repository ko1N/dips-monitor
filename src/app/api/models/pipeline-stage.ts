/* tslint:disable */
import { PipelineTask } from './pipeline-task';
import { PipelineVariable } from './pipeline-variable';
export interface PipelineStage {
  environment?: string;
  name?: string;
  tasks?: Array<PipelineTask>;
  variables?: Array<PipelineVariable>;
}
