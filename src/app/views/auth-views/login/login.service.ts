import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FrameURLService } from '../../../shared/services/http/frame-url.service';
import { RequestEnums } from '../../../shared/constants/request-enums';
import { CommonHttpService } from '../../../shared/services/http/common-http.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private _frameUrlService: FrameURLService,
    private _commonHttpService: CommonHttpService) { }

  login(requestObject: any): Observable<any> | undefined {
    requestObject.path = this._frameUrlService.getHttpFramedURL(requestObject);
    console.log(requestObject);
    return this._commonHttpService.sendReciveService({ requestObj: requestObject });
  }
}
