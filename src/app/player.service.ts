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

  getPlayer(id: number): Observable<Player> {
    // TODO: send the message _after_ fetching the hero
    this.messageService.add(`PlayerService: fetched player id=${id}`);
    return of(PLAYERS.find(player => player.id === id));
  }

}
