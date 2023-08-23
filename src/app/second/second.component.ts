import { Component, inject } from '@angular/core';
import { SampleService } from '../sample.service';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.scss'],
  providers: [SampleService]
})
export class SecondComponent {
  sampleService: SampleService = inject(SampleService);

  message = this.sampleService.message;
}
