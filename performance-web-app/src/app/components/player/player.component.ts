import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {PlayerModel} from "../../models/player-model";

@Component({
  selector: 'mpw-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class PlayerComponent implements OnInit {

  @Input()
  public playerModel: PlayerModel = { id: -1, image: 'panda' };

  constructor() { }

  ngOnInit(): void {
  }

  getPlayerImageUrl() {
    return `assets/${ this.playerModel.image }.png`;
  }

  public doCheck(): void
  {
    console.log("Player component view checked");
  }

}
