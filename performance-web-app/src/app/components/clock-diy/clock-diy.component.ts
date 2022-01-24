import {ChangeDetectorRef, Component, ElementRef, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {interval, map, Subscription, take} from "rxjs";

@Component({
  selector: 'mpw-clock-diy',
  templateUrl: './clock-diy.component.html',
  styleUrls: ['./clock-diy.component.scss']
})
export class ClockDiyComponent implements OnDestroy {

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
    console.log("DIY Clock component view checked");
  }

}
