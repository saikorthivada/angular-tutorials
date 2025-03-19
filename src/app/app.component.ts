import { Component } from '@angular/core';
import { CodeReviewFeedbackComponent } from './code-review-feedback/code-review-feedback.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [CodeReviewFeedbackComponent]
})
export class AppComponent {
  title = 'v-19';
}
