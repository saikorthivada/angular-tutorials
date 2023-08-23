import { Component, inject } from '@angular/core';
import { SampleService } from '../sample.service';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.scss'],
  providers: [SampleService]
})
export class FirstComponent {

  sampleService: SampleService = inject(SampleService);

  message = this.sampleService.message;

  updateMessage() {
    this.sampleService.setMessage(Math.random().toString())
  }
}
