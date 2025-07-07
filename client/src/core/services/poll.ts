import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Poll } from '../../types/poll';

@Injectable({
  providedIn: 'root'
})
export class PollService {
  private http = inject(HttpClient);
  private baseUrl = 'https://localhost:5001/api/'

  getAllPolls(): Observable<Poll[]> {
    return this.http.get<Poll[]>(this.baseUrl + 'polls')
  }

  getPollById(id: string): Observable<Poll> {
    return this.http.get<Poll>(this.baseUrl + 'polls/' + id);
  }

  createPoll(poll: any): Observable<Poll> {
    return this.http.post<Poll>(this.baseUrl + 'polls', poll);
  }
}
