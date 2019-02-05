import { Component, OnInit } from '@angular/core';
import { Player } from '../player';
import { PlayerService } from '../player.service';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})
export class PlayersComponent implements OnInit {

  constructor(private playerService: PlayerService) { }
  
  ngOnInit() {
    this.getPlayers();
  }

  selectedPlayer: Player;
  onSelect(player: Player): void {
    this.selectedPlayer = player;
  }

  players : Player[];


  getPlayers(): void {
    this.playerService.getPlayers()
        .subscribe(players_f => this.players = players_f);
  }

}
