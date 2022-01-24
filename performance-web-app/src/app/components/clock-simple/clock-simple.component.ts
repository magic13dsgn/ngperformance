import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy} from '@angular/core';
import {interval, map, Subscription, take, tap} from "rxjs";

@Component({
  selector: 'mpw-clock-simple',
  templateUrl: './clock-simple.component.html',
  styleUrls: ['./clock-simple.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class ClockSimpleComponent implements OnDestroy {

  private time = 0;
  // @ts-ignore
  private timeSubscription: Subscription;

  constructor(private ref: ChangeDetectorRef) {
  }

  public start() {
    if(this.timeSubscription) {
      this.timeSubscription.unsubscribe();
    }

    this.timeSubscription = interval(10).pipe(
      take(1001), // 0, 1, ..., 1000
      map(time => time * 10),
      // tap(() => this.ref.detectChanges())
    ).subscribe(time => this.time = time);
  }

  public getTime() {
    return this.time;
  }

  public ngOnDestroy() {
    this.timeSubscription.unsubscribe();
  }

  public doCheck(): void
  {
    console.log("Simple Clock component view checked");
  }

}
