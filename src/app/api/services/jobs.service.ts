/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { ManagerJobInfoResponse } from '../models/manager-job-info-response';
import { ManagerJobListResponse } from '../models/manager-job-list-response';
@Injectable({
  providedIn: 'root',
})
class JobsService extends __BaseService {
  static readonly jobInfoPath = '/manager/job/info/{job_id}';
  static readonly jobListPath = '/manager/job/list';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * This method will return a single job by it's id or an error.
   * @param job_id Job ID
   * @return OK
   */
  jobInfoResponse(jobId: string): __Observable<__StrictHttpResponse<ManagerJobInfoResponse>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/manager/job/info/${jobId}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ManagerJobInfoResponse>;
      })
    );
  }
  /**
   * This method will return a single job by it's id or an error.
   * @param job_id Job ID
   * @return OK
   */
  jobInfo(jobId: string): __Observable<ManagerJobInfoResponse> {
    return this.jobInfoResponse(jobId).pipe(
      __map(_r => _r.body as ManagerJobInfoResponse)
    );
  }

  /**
   * This method will return a list of all jobs
   * @return OK
   */
  jobListResponse(): __Observable<__StrictHttpResponse<ManagerJobListResponse>> {
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
        return _r as __StrictHttpResponse<ManagerJobListResponse>;
      })
    );
  }
  /**
   * This method will return a list of all jobs
   * @return OK
   */
  jobList(): __Observable<ManagerJobListResponse> {
    return this.jobListResponse().pipe(
      __map(_r => _r.body as ManagerJobListResponse)
    );
  }
}

module JobsService {
}

export { JobsService }
