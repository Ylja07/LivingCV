import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { TimelineComponent } from './timeline/timeline.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ToolbarComponent, TimelineComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'ylja-tijdlijn-energieplan';
}
