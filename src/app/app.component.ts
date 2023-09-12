import { HttpResponse } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  apiService: ApiService = inject(ApiService);
  constructor() {
    this.apiService.getTodos().subscribe((res: any) => {
      console.log(res);

    })
  }
}
