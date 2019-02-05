import { Injectable } from '@angular/core';
import { Player } from './player';
import { PLAYERS } from './mock-players';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { MessageService } from './message.service';

@Injectable()

export class PlayerService {

  constructor(private messageService: MessageService) { }

  getPlayers(): Observable<Player[]> {
    this.messageService.add('PlayerService: fetched players');
    return of(PLAYERS);
  }

}
