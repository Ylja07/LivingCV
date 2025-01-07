import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Injectable } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-timeline',
  imports: [MatCardModule],
  templateUrl: './timeline.component.html',
  styleUrl: './timeline.component.scss'
})
@Injectable({providedIn: 'root'})
export class TimelineComponent implements OnInit {

  constructor(private http: HttpClient) {
  }
  
  MAX_ITEMS_PER_PAGE: number = 3;
  
  ngOnInit() {
    this.http.get('assets/timeline-test.json').subscribe(
      data => console.log(data),
      error => console.error('Error loading JSON file', error)
    );
  }

  onDotClick(month: string): void {
    console.log(`Clicked on: ${month}`);
  }

}
