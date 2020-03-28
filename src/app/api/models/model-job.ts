/* tslint:disable */
import { ModelJobParameter } from './model-job-parameter';
import { ModelPipeline } from './model-pipeline';
export interface ModelJob {
  createdAt?: string;
  id?: string;
  name?: string;
  parameters?: Array<ModelJobParameter>;
  pipeline?: ModelPipeline;
  updatedAt?: string;
}
