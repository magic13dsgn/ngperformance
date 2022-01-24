import { Component, OnInit } from '@angular/core';
import {PlayerModel} from "../../models/player-model";

@Component({
  selector: 'mpw-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {

  public players: Array<PlayerModel> = [ { id: 1, image: "panda" }, { id:2, image:"croco" } ];
  images: Array<string> = [ 'panda', 'croco' ];

  constructor() { }

  ngOnInit(): void {
  }

  public changePlayer(id: number) {
    // Mutable object
    // let currentImage = this.players[id].image;
    // this.players[id].image = currentImage == 'panda' ? 'croco' : 'panda';

    // Immutable object
    let currentPlayer = this.players[id];
    let currentImage = this.players[id].image;
    this.players[id] = {...currentPlayer, image: currentImage == 'panda' ? 'croco' : 'panda'}
  }

  public doCheck(): void
  {
    console.log("Game component view checked");
  }

}
