import { Component } from '@angular/core';
import { NavigationEnd, Router, UrlSegment } from '@angular/router';
import { filter } from 'rxjs/operators';
import { BreadcrumbsService } from './shared/services/breadcrumbs.service';
import { InsightsService } from './shared/services/insights.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'geostudy';
  constructor(private insightsService: InsightsService, private router: Router, private breadcrumbsService: BreadcrumbsService) {
    this.insightsService.logPageView('App');

    router.events.pipe(filter(e => e instanceof NavigationEnd)).subscribe((e) => {
      this.breadcrumbsService.setBreadcrumbs(this.router.routerState);
    });

  }
}
