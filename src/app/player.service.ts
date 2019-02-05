import { Injectable } from '@angular/core';
import { Player } from './player';
import { PLAYERS } from './mock-players';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

@Injectable()

export class PlayerService {

  constructor() { }

  getPlayers(): Observable<Player[]> {
    return of(PLAYERS);
  }

}
