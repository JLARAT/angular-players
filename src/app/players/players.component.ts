import { Component, OnInit } from '@angular/core';
import { Player } from '../player';
import { PLAYERS } from '../mock-players';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})
export class PlayersComponent implements OnInit {

  selectedPlayer: Player;
  onSelect(player: Player): void {
    this.selectedPlayer = player;
  }

  players = PLAYERS;

  constructor() { }

  ngOnInit() {
  }

}
