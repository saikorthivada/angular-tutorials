import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class APIResolver implements Resolve<Promise<any>> {
  constructor(private httpClient: HttpClient) {

  }
  async resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<any> {
    console.log('Resolver');
    const data = await this.httpClient.get('https://jsonplaceholder.typicode.com/todos').toPromise();
    console.log(data);
    return data;
  }
}
