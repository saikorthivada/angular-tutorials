import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import {catchError} from 'rxjs/operators'
@Injectable()
export class BasicInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log('Intercept');
    const updatedRequest = request.clone({
      setHeaders: {
        Authorization: `Bearer Token`
      }
    });
    return next.handle(updatedRequest).pipe(
      catchError((err: HttpErrorResponse) =>{
        console.log('Catch error', err);
        if(err.status === 404) {
          return throwError('URL not found');
        }
        return throwError('Something Went wrong');
      })
    );
  }
}
