import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mpw-workshop-profiling-many',
  templateUrl: './workshop-profiling-many.component.html',
  styleUrls: ['./workshop-profiling-many.component.scss']
})
export class WorkshopProfilingManyComponent implements OnInit {

  public items: number[] = [];

  constructor() {
    this.items = this.calculateItems();
  }

  ngOnInit(): void {
  }

  public calculateItems(): number[] {
    let _items = [];
    for (let i = 0; i < 100; i++) {
      _items.push(i);
    }
    return _items;
  }

}
