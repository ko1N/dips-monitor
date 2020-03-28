/* tslint:disable */
import { PipelineParameter } from './pipeline-parameter';
import { PipelineStage } from './pipeline-stage';
export interface PipelinePipeline {
  name?: string;
  parameters?: Array<PipelineParameter>;
  stages?: Array<PipelineStage>;
}
