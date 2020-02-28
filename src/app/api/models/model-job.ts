/* tslint:disable */
import { ModelJobStage } from './model-job-stage';
export interface ModelJob {
  createdAt?: string;
  id?: string;
  logs?: Array<string>;
  pipeline?: string;
  progress?: number;
  stages?: Array<ModelJobStage>;
  updatedAt?: string;
}
