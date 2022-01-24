import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {ImageService} from "../../services/image.service";
import {Observable, map} from "rxjs";

@Component({
  selector: 'mpw-random-player',
  templateUrl: './random-player.component.html',
  styleUrls: ['./random-player.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class RandomPlayerComponent implements OnInit {

  public image: string = 'assets/panda.png';

  // OnPush observable approach
  // public image$: Observable<string>;

  constructor(private imageService: ImageService) {
    // OnPush observable approach
    // this.image$ = this.imageService.randomImage.pipe(
    //   map(image => this.getPlayerImageUrl(image))
    // );
  }

  ngOnInit(): void {
    this.imageService.randomImage.subscribe(image => this.image = this.getPlayerImageUrl(image))
  }

  public doCheck(): void
  {
    console.log("Random Player component view checked");
  }

  getPlayerImageUrl(image: string) {
    return `assets/${ image }.png`;
  }

}
