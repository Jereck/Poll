import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { PollService } from '../../core/services/poll';
import { Poll } from '../../types/poll';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-poll-create',
  imports: [FormsModule],
  templateUrl: './poll-create.html',
  styleUrl: './poll-create.css'
})
export class PollCreate {
  private router = inject(Router);
  protected pollService = inject(PollService);
  protected pollDeets: Poll = {
    question: '',
    options: []
  };
  protected isSubmitting = false;

  async create() {
    if (this.isSubmitting) return;

    this.isSubmitting = true;

    try {
      const pollData = {
        ...this.pollDeets,
      }
      
      await this.pollService.createPoll(pollData).subscribe({
        next: () => this.router.navigate(['/']),
        error: (err) => {
          console.error("Error creating poll: ", err)
          this.isSubmitting = false;
        }
      })
    } catch (error) {
      console.error("Error creating poll: ", error)
    } finally {
      this.isSubmitting = false;
    }
  }
}
