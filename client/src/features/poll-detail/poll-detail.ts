import { Component, inject, OnInit, signal } from '@angular/core';
import { PollService } from '../../core/services/poll';
import { ActivatedRoute, Router } from '@angular/router';
import { Poll } from '../../types/poll';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-poll-detail',
  imports: [CommonModule, FormsModule],
  templateUrl: './poll-detail.html',
  styleUrl: './poll-detail.css'
})
export class PollDetail implements OnInit {
  private pollService = inject(PollService);
  private route = inject(ActivatedRoute);
  private router = inject(Router);

  protected poll = signal<Poll | undefined>(undefined);
  protected selectedOptionId = signal<number | null>(null);
  protected voted = signal(false);

  ngOnInit(): void {
    const pollId = this.route.snapshot.paramMap.get('id');
    if (pollId) {
      this.loadPoll(pollId);
      this.voted.set(localStorage.getItem(`voted_${pollId}`) === 'true');
    }
  }

  loadPoll(id: string): void {
    this.pollService.getPollById(id).subscribe({
      next: (data) => this.poll.set(data),
      error: err => console.error(err)
    })
  }

  submitVote(): void {
    const pollValue = this.poll();
    const optionId = this.selectedOptionId();

    if (!pollValue || !optionId || this.voted() || !pollValue.id) return;

    this.pollService.vote(pollValue.id, optionId).subscribe({
      next: () => {
        localStorage.setItem(`voted_${pollValue.id}`, 'true');
        this.voted.set(true);
        this.loadPoll(pollValue.id!);
        this.router.navigate(['/']);
      },
      error: (err) => console.error(err)
    });
  }

  getVotePercent(votes: number): number {
    const totalVotes = this.poll()?.options.reduce((acc, o) => acc + (o.voteCount ?? 0), 0) || 0;
    return totalVotes > 0 ? (votes / totalVotes) * 100 : 0;
  }
}
