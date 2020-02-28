/* tslint:disable */
import { ModelJobStageTask } from './model-job-stage-task';
export interface ModelJobStage {
  name?: string;
  progress?: number;
  tasks?: Array<ModelJobStageTask>;
}
