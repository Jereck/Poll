import { Routes } from '@angular/router';
import { PollList } from '../features/poll-list/poll-list';
import { PollCreate } from '../features/poll-create/poll-create';
import { PollDetail } from '../features/poll-detail/poll-detail';

export const routes: Routes = [
  { path: '', component: PollList },
  { path: 'polls/new', component: PollCreate },
  { path: 'polls/:id', component: PollDetail }
];
