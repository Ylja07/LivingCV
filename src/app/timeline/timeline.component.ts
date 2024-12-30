import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timeline',
  imports: [],
  templateUrl: './timeline.component.html',
  styleUrl: './timeline.component.scss'
})
export class TimelineComponent implements OnInit {
  ngOnInit() {
  }


  MAX_ITEMS_PER_PAGE: number = 3;

  onDotClick(month: string): void {
    console.log(`Clicked on: ${month}`);
  }

}
