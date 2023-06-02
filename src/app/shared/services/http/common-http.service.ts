// Angular Modules
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { map, catchError, retry } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { PROPERTIES } from '../../constants/app-properties';
import { errors } from '../../constants/errors';
import { Observable } from 'rxjs';

// Custom Enums

@Injectable({
    providedIn: 'root'
})
export class CommonHttpService {

    constructor(private http: HttpClient) { }

    // @method get
    // @params HttpParams if needed
    // @path Request URL
    private get(path: string, requestOptions: any): Observable<any> {
        return this.http.get(path, requestOptions).pipe(
            map(res => {
                return res;
            }),
            catchError(this.errorHandler), // Catch Errors if service fails
            retry(PROPERTIES.RETRY_SERVICE_COUNT) // if you want to retry the request. Please mention the retry count value
        );
    }
    // Utility method for Create.
    // @method post
    // @param path
    // @param body
    private put(path: string, body = {}, requestOptions: any): Observable<any> {
        return this.http.put(
            path, body, requestOptions).pipe(
                map(res => {
                    return res;
                }),
                catchError(this.errorHandler)
            );
    }
    // Utility method for Create.
    // @method post
    // @param path
    // @param body
    private post(path: string, body = {}, requestOptions: any): Observable<any> {
        return this.http.post(
            path, body, requestOptions).pipe(
                map(res => {
                    return res;
                }),
                catchError(this.errorHandler)
            );
    }


    // Utility method for Create.
    // @method patch
    // @param path
    // @param body
    // @param customHeaders
    private patch(path: string, body = {}, requestOptions: any): Observable<any> {
        return this.http.patch(
            path, body, requestOptions).pipe(
                map(res => {
                    return res;
                }),
                catchError(this.errorHandler)
            );
    }

    // Utility method for Create.
    // @method delete
    // @param path
    // @param customHeaders
    private delete(path: string, requestOptions: any): Observable<any> {
        return this.http.delete(
            path, requestOptions).pipe(
                map(res => {
                    return res;
                }),
                catchError(this.errorHandler)
            );
    }

    // Please add errors and error codes in errors.json.ts file
    private errorHandler(error: HttpErrorResponse) {
        // To know weather the error is from Client or server error
        if (error.error instanceof ErrorEvent) {
            console.log('Client side error. Please check the request and body');
        } else {
            console.log('Server Error. Please check the error from server side');
        }
        // get's error message from errors.json.ts
        let errorMessage = errors['default'].message;
        if (errors.hasOwnProperty(error.status)) {
            errorMessage = (errors as any)?.[error.status]?.message;
        }
        return throwError(errorMessage);
    }

    // To execute any Http service request
    public sendReciveService(
{ requestObj, body = {}, params = new HttpParams(), customHeaders }: { requestObj: any; body?: {}; params?: HttpParams; customHeaders?: HttpHeaders; }): Observable<any> | undefined {
        const requestOptions = customHeaders ? { headers: customHeaders } : {} as any;
        requestOptions['params'] = params;
        switch (requestObj.type) {
            case 'GET': {
                return this.get(requestObj.path, requestOptions);
            }
            case 'POST': {
                return this.post(requestObj.path, body, requestOptions);
            }
            case 'PUT': {
                return this.put(requestObj.path, body, requestOptions);
            }
            case 'PATCH': {
                return this.patch(requestObj.path, body, requestOptions);
            }
            case 'DELETE': {
                return this.delete(requestObj.path, requestOptions);
            }
        }
    }
}
