import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { PollService } from '../../core/services/poll';
import { Poll } from '../../types/poll';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-poll-create',
  imports: [FormsModule, CommonModule],
  templateUrl: './poll-create.html',
  styleUrl: './poll-create.css'
})
export class PollCreate {
  private router = inject(Router);
  protected pollService = inject(PollService);

  protected pollDeets: { question: string } = {
    question: '',
  };

  protected options: string[] = ['', ''];
  protected isSubmitting = false;

  addOption(): void {
    this.options.push('');
  }

  removeOption(index: number): void {
    this.options.splice(index, 1);
  }

  create() {
    if (this.isSubmitting || this.options.length < 2) return;

    this.isSubmitting = true;

    const pollPayload = {
      question: this.pollDeets.question.trim(),
      options: this.options
        .map(text => text.trim())
        .filter(text => !!text)
    };

    this.pollService.createPoll(pollPayload).subscribe({
      next: () => this.router.navigate(['/']),
      error: (err) => {
        console.error("Error creating poll: ", err);
        this.isSubmitting = false;
      },
      complete: () => this.isSubmitting = false
    });
  }
}
