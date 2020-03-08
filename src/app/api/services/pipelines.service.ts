/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { ManagerPipelineCreateResponse } from '../models/manager-pipeline-create-response';
import { ManagerPipelineListResponse } from '../models/manager-pipeline-list-response';
import { ManagerPipelineDetailsResponse } from '../models/manager-pipeline-details-response';
import { ManagerSuccessResponse } from '../models/manager-success-response';
import { ManagerPipelineExecuteRequest } from '../models/manager-pipeline-execute-request';
@Injectable({
  providedIn: 'root',
})
class PipelinesService extends __BaseService {
  static readonly pipelineCreatePath = '/manager/pipeline/';
  static readonly pipelineListPath = '/manager/pipeline/all';
  static readonly pipelineDetailsPath = '/manager/pipeline/details/{pipeline_id}';
  static readonly pipelineExecutePath = '/manager/pipeline/execute/{pipeline_id}';
  static readonly pipelineDeletePath = '/manager/pipeline/{pipeline_id}';
  static readonly pipelineUpdatePath = '/manager/pipeline/{pipeline_id}';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * This method will create the pipeline sent via the post body
   * @param pipeline Pipeline Script
   * @return OK
   */
  pipelineCreateResponse(pipeline: string): __Observable<__StrictHttpResponse<ManagerPipelineCreateResponse>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = pipeline;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/manager/pipeline/`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ManagerPipelineCreateResponse>;
      })
    );
  }
  /**
   * This method will create the pipeline sent via the post body
   * @param pipeline Pipeline Script
   * @return OK
   */
  pipelineCreate(pipeline: string): __Observable<ManagerPipelineCreateResponse> {
    return this.pipelineCreateResponse(pipeline).pipe(
      __map(_r => _r.body as ManagerPipelineCreateResponse)
    );
  }

  /**
   * This method will return a list of all registered pipelines
   * @return OK
   */
  pipelineListResponse(): __Observable<__StrictHttpResponse<ManagerPipelineListResponse>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/manager/pipeline/all`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ManagerPipelineListResponse>;
      })
    );
  }
  /**
   * This method will return a list of all registered pipelines
   * @return OK
   */
  pipelineList(): __Observable<ManagerPipelineListResponse> {
    return this.pipelineListResponse().pipe(
      __map(_r => _r.body as ManagerPipelineListResponse)
    );
  }

  /**
   * This method will return a single pipeline by it's id or an error.
   * @param pipeline_id Pipeline ID
   * @return OK
   */
  pipelineDetailsResponse(pipelineId: string): __Observable<__StrictHttpResponse<ManagerPipelineDetailsResponse>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/manager/pipeline/details/${pipelineId}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ManagerPipelineDetailsResponse>;
      })
    );
  }
  /**
   * This method will return a single pipeline by it's id or an error.
   * @param pipeline_id Pipeline ID
   * @return OK
   */
  pipelineDetails(pipelineId: string): __Observable<ManagerPipelineDetailsResponse> {
    return this.pipelineDetailsResponse(pipelineId).pipe(
      __map(_r => _r.body as ManagerPipelineDetailsResponse)
    );
  }

  /**
   * This method will execute the pipeline with the given id
   * @param params The `PipelinesService.PipelineExecuteParams` containing the following parameters:
   *
   * - `pipeline_id`: Pipeline ID
   *
   * - `execute_request`: Request Body
   *
   * @return OK
   */
  pipelineExecuteResponse(params: PipelinesService.PipelineExecuteParams): __Observable<__StrictHttpResponse<ManagerSuccessResponse>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    __body = params.executeRequest;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/manager/pipeline/execute/${params.pipelineId}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ManagerSuccessResponse>;
      })
    );
  }
  /**
   * This method will execute the pipeline with the given id
   * @param params The `PipelinesService.PipelineExecuteParams` containing the following parameters:
   *
   * - `pipeline_id`: Pipeline ID
   *
   * - `execute_request`: Request Body
   *
   * @return OK
   */
  pipelineExecute(params: PipelinesService.PipelineExecuteParams): __Observable<ManagerSuccessResponse> {
    return this.pipelineExecuteResponse(params).pipe(
      __map(_r => _r.body as ManagerSuccessResponse)
    );
  }

  /**
   * This method will delete the given pipeline
   * @param pipeline_id Pipeline ID
   * @return OK
   */
  pipelineDeleteResponse(pipelineId: string): __Observable<__StrictHttpResponse<ManagerSuccessResponse>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/manager/pipeline/${pipelineId}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ManagerSuccessResponse>;
      })
    );
  }
  /**
   * This method will delete the given pipeline
   * @param pipeline_id Pipeline ID
   * @return OK
   */
  pipelineDelete(pipelineId: string): __Observable<ManagerSuccessResponse> {
    return this.pipelineDeleteResponse(pipelineId).pipe(
      __map(_r => _r.body as ManagerSuccessResponse)
    );
  }

  /**
   * This method will update the given pipeline from a provided script
   * @param params The `PipelinesService.PipelineUpdateParams` containing the following parameters:
   *
   * - `pipeline_id`: Pipeline ID
   *
   * - `pipeline`: Pipeline Script
   *
   * @return OK
   */
  pipelineUpdateResponse(params: PipelinesService.PipelineUpdateParams): __Observable<__StrictHttpResponse<ManagerPipelineDetailsResponse>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    __body = params.pipeline;
    let req = new HttpRequest<any>(
      'PATCH',
      this.rootUrl + `/manager/pipeline/${params.pipelineId}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ManagerPipelineDetailsResponse>;
      })
    );
  }
  /**
   * This method will update the given pipeline from a provided script
   * @param params The `PipelinesService.PipelineUpdateParams` containing the following parameters:
   *
   * - `pipeline_id`: Pipeline ID
   *
   * - `pipeline`: Pipeline Script
   *
   * @return OK
   */
  pipelineUpdate(params: PipelinesService.PipelineUpdateParams): __Observable<ManagerPipelineDetailsResponse> {
    return this.pipelineUpdateResponse(params).pipe(
      __map(_r => _r.body as ManagerPipelineDetailsResponse)
    );
  }
}

module PipelinesService {

  /**
   * Parameters for pipelineExecute
   */
  export interface PipelineExecuteParams {

    /**
     * Pipeline ID
     */
    pipelineId: string;

    /**
     * Request Body
     */
    executeRequest: ManagerPipelineExecuteRequest;
  }

  /**
   * Parameters for pipelineUpdate
   */
  export interface PipelineUpdateParams {

    /**
     * Pipeline ID
     */
    pipelineId: string;

    /**
     * Pipeline Script
     */
    pipeline: string;
  }
}

export { PipelinesService }
