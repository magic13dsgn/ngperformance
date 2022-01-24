import {ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, OnDestroy, ViewChild} from '@angular/core';
import {interval, map, Subscription, take} from "rxjs";

@Component({
  selector: 'mpw-clock-analog',
  templateUrl: './clock-analog.component.html',
  styleUrls: ['./clock-analog.component.scss'],
})
export class ClockAnalogComponent implements OnDestroy {

  // @ts-ignore
  public time: number = 0;
  // @ts-ignore
  public timeSubscription: Subscription;
  // @ts-ignore
  @ViewChild('clock', {static: true}) clock: ElementRef<HTMLParagraphElement>;

  constructor(private ref: ChangeDetectorRef) {
    this.ref.detach();
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
      if (this.time % 1000 === 0) {
        this.clock.nativeElement.textContent = `${time}`;
      }
    });
  }

  ngOnDestroy() {
    this.timeSubscription.unsubscribe();
  }

  public doCheck(): void
  {
    console.log("Analog Clock component view checked");
  }

}
