import { Component, inject, OnInit, signal } from '@angular/core';
import { PollService } from '../../core/services/poll';
import { Poll } from '../../types/poll';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-poll-list',
  imports: [RouterLink],
  templateUrl: './poll-list.html',
  styleUrl: './poll-list.css'
})
export class PollList implements OnInit {
  private pollService = inject(PollService);
  private router = inject(Router);
  protected polls = signal<Poll[]>([]);

  ngOnInit(): void {
    this.loadPolls();
  }

  loadPolls(): void {
    this.pollService.getAllPolls().subscribe({
      next: polls => this.polls.set(polls),
      error: err => console.error('Failed to load polls', err)
    });
  }

  delete(id: string) {
    this.pollService.deletePoll(id).subscribe({
      next: () => {
        console.log("Delete successful")
        this.loadPolls();
      },
      error: (err) => console.log("Delete failed: ", err)
    })
  }

  getPercentage(votes: number, options: any[]): number {
    const total = options.reduce((sum, option) => sum + (option.voteCount || 0), 0);
    return total === 0 ? 0 : Math.round((votes / total) * 100);
  }
}
