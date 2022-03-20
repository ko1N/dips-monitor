/* tslint:disable */
import { PipelineExpression } from './pipeline-expression';
export interface PipelineTask {
  ignore_errors?: boolean;
  input?: {[key: string]: any};
  name?: string;

  /**
   * NotifyRef
   */
  notify?: Array<string>;
  register?: string;
  service?: string;
  when?: PipelineExpression;
}
