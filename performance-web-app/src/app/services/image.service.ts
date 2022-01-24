import { Injectable } from '@angular/core';
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  private images: Array<string> = [ 'panda', 'croco' ];

  public randomImage: Observable<string>;

  constructor() {
    this.randomImage = new Observable(subscriber => {
      subscriber.next('panda');
      setInterval(() => {
        subscriber.next(this.getRandomImage());
      }, 1000);
    });
  }

  private getRandomImage () {
    return this.images[Math.floor((Math.random() * this.images.length))];
  }

}
