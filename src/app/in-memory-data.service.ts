import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Player } from './player';
import { Injectable } from '@angular/core';

@Injectable()

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const players = [
      { id: 11, name: 'SB Williams' },
      { id: 12, name: 'R Mc Caw' },
      { id: 13, name: 'J Barrett' },
      { id: 14, name: 'W Saver' },
      { id: 15, name: 'B Retallick' },
      { id: 16, name: 'J Wilkinson' },
      { id: 17, name: 'J Lomu' },
      { id: 18, name: 'P O\'Connel' },
      { id: 19, name: 'S Radrada' },
      { id: 20, name: 'C Smith' }
    ];
    return {players};
  }

  genId(players: Player[]): number {
    return players.length > 0 ? Math.max(...players.map(player => player.id)) + 1 : 11;
  }
}