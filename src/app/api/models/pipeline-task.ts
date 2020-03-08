/* tslint:disable */
import { PipelineCommand } from './pipeline-command';
import { PipelineExpression } from './pipeline-expression';
export interface PipelineTask {
  command?: Array<PipelineCommand>;
  ignore_errors?: boolean;
  name?: string;

  /**
   * NotifyRef
   */
  notify?: Array<string>;

  /**
   * VariableRef
   */
  register?: string;
  when?: PipelineExpression;
}
