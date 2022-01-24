import {ChangeDetectorRef, Component, OnDestroy, OnInit} from '@angular/core';
import {interval, map, Subscription, take} from "rxjs";

@Component({
  selector: 'mpw-clock-smart',
  templateUrl: './clock-smart.component.html',
  styleUrls: ['./clock-smart.component.scss']
})
export class ClockSmartComponent implements OnDestroy {

  // @ts-ignore
  private time: number = 0;
  // @ts-ignore
  private timeSubscription: Subscription;

  constructor(private ref: ChangeDetectorRef) {
    ref.detach();
  }

  start() {
    if(this.timeSubscription) {
      this.timeSubscription.unsubscribe();
    }
    
    this.timeSubscription = interval(10).pipe(
      take(1001), // 0, 1, ..., 1000
      map(time => time * 10)
    ).subscribe(time => {
      this.time = time;
      // manually trigger the change detection every second
      if (this.time % 1000 === 0) {
        this.ref.detectChanges();
      }
    });
  }

  public getTime() {
    return this.time;
  }

  public ngOnDestroy() {
    this.timeSubscription.unsubscribe();
  }

  public doCheck(): void
  {
    console.log("Smart Clock component view checked");
  }

}
