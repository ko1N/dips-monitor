/* tslint:disable */
import { ModelJob } from './model-job';
import { MessagesMessage } from './messages-message';
export interface ManagerJobDetailsResponse {
  job?: ModelJob;
  messages?: Array<MessagesMessage>;
}
