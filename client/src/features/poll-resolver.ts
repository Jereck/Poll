import { ResolveFn, Router } from '@angular/router';
import { PollService } from '../core/services/poll';
import { inject } from '@angular/core';
import { EMPTY } from 'rxjs';
import { Poll } from '../types/poll';

export const pollResolver: ResolveFn<Poll> = (route, state) => {
  const pollService = inject(PollService);
  const router = inject(Router);
  const pollId = route.paramMap.get('id');

  if (!pollId) {
    router.navigateByUrl('/');
    return EMPTY;
  }

  return pollService.getPollById(pollId);
};
