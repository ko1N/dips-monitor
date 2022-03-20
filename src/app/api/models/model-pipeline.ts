/* tslint:disable */
import { PipelinePipeline } from './pipeline-pipeline';
export interface ModelPipeline {
  id?: string;
  name?: string;
  pipeline?: PipelinePipeline;
  revision?: number;
  script?: string;
}
