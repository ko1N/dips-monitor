/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { RestSuccessResponse } from '../models/rest-success-response';
import { RestJobListResponse } from '../models/rest-job-list-response';
import { RestJobInfoResponse } from '../models/rest-job-info-response';
@Injectable({
  providedIn: 'root',
})
class JobsService extends __BaseService {
  static readonly executeJobPath = '/manager/job/execute';
  static readonly jobListPath = '/manager/job/list';
  static readonly jobInfoPath = '/manager/jobs/info/{job_id}';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * This method will execute the job sent via the post body
   * @param pipeline Pipeline Script
   * @return OK
   */
  executeJobResponse(pipeline: string): __Observable<__StrictHttpResponse<RestSuccessResponse>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = pipeline;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/manager/job/execute`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<RestSuccessResponse>;
      })
    );
  }
  /**
   * This method will execute the job sent via the post body
   * @param pipeline Pipeline Script
   * @return OK
   */
  executeJob(pipeline: string): __Observable<RestSuccessResponse> {
    return this.executeJobResponse(pipeline).pipe(
      __map(_r => _r.body as RestSuccessResponse)
    );
  }

  /**
   * This method will return a list of all jobs
   * @return OK
   */
  jobListResponse(): __Observable<__StrictHttpResponse<RestJobListResponse>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/manager/job/list`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<RestJobListResponse>;
      })
    );
  }
  /**
   * This method will return a list of all jobs
   * @return OK
   */
  jobList(): __Observable<RestJobListResponse> {
    return this.jobListResponse().pipe(
      __map(_r => _r.body as RestJobListResponse)
    );
  }

  /**
   * This method will return a single job by it's id or an error.
   * @param job_id Job ID
   * @return OK
   */
  jobInfoResponse(jobId: string): __Observable<__StrictHttpResponse<RestJobInfoResponse>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/manager/jobs/info/${jobId}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<RestJobInfoResponse>;
      })
    );
  }
  /**
   * This method will return a single job by it's id or an error.
   * @param job_id Job ID
   * @return OK
   */
  jobInfo(jobId: string): __Observable<RestJobInfoResponse> {
    return this.jobInfoResponse(jobId).pipe(
      __map(_r => _r.body as RestJobInfoResponse)
    );
  }
}

module JobsService {
}

export { JobsService }
