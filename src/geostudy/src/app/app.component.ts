import { Component } from '@angular/core';
import { InsightsService } from './shared/services/insights.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'geostudy';
  constructor(private insightsService: InsightsService) {
    this.insightsService.logPageView('App');
  }
}
