/* tslint:disable */
import { ModelPipeline } from './model-pipeline';
export interface ModelJob {
  id?: string;
  name?: string;
  pipeline?: ModelPipeline;
  variables?: {[key: string]: any};
}
