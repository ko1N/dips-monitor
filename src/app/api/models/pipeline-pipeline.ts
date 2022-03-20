/* tslint:disable */
import { PipelineStage } from './pipeline-stage';
export interface PipelinePipeline {
  name?: string;
  parameters?: Array<string>;
  stages?: Array<PipelineStage>;
}
