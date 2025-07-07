import { Component, inject } from '@angular/core';
import { PollService } from '../../core/services/poll';
import { Observable } from 'rxjs';
import { Poll } from '../../types/poll';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-poll-list',
  imports: [AsyncPipe],
  templateUrl: './poll-list.html',
  styleUrl: './poll-list.css'
})
export class PollList {
  private pollService = inject(PollService);
  protected polls$: Observable<Poll[]>;

  constructor() {
    this.polls$ = this.pollService.getAllPolls();
  }
}
