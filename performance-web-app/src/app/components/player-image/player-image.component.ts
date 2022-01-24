import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'mpw-player-image',
  templateUrl: './player-image.component.html',
  styleUrls: ['./player-image.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class PlayerImageComponent implements OnInit {

  @Input()
  public src: string | null = null;

  constructor() { }

  ngOnInit(): void {
  }

  public doCheck(): void
  {
    console.log("Player-Image component view checked");
  }

}
