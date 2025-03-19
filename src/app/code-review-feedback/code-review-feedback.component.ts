import { Component, signal } from '@angular/core';

const ASPECTS = [
  {
    id: 1,
    label: "Readability",
    upvote: 0,
    downvote: 0
  },
  {
    id: 2,
    label: "Performance",
    upvote: 0,
    downvote: 0
  },
  {
    id: 3,
    label: "Security",
    upvote: 0,
    downvote: 0
  },
  {
    id: 4,
    label: "Documentation",
    upvote: 0,
    downvote: 0
  },
  {
    id: 5,
    label: "Testing",
    upvote: 0,
    downvote: 0
  },
  {
    id: 6,
    label: "Standards",
    upvote: 0,
    downvote: 0
  }
]
@Component({
  selector: 'app-code-review-feedback',
  imports: [],
  templateUrl: './code-review-feedback.component.html',
  styleUrl: './code-review-feedback.component.scss'
})
export class CodeReviewFeedbackComponent {
  aspects = signal<any[]>(ASPECTS);

  voteHandler(index: number, propertyValue: string) {
    this.aspects.update((value) => {
      value[index][propertyValue] = value[index][propertyValue] + 1;
      return value;
    })
  }
}
