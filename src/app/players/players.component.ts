import { Component, OnInit } from '@angular/core';
import {Player} from '../player';
import { PLAYERS } from '../mock-players';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})
export class PlayersComponent implements OnInit {

  player : Player = {
    id: 1,
    name:"SB Williams"
  };

  players = PLAYERS;

  constructor() { }

  ngOnInit() {
  }

}
