import { Component, OnInit } from '@angular/core';
import { BreadcrumbsService } from '../../services/breadcrumbs.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  breadcrumbs: {pathFromRoot: string, text: string}[] = [];

  constructor(private breadcrumbsService: BreadcrumbsService) { }

  ngOnInit(): void {
    this.breadcrumbsService.breadcrumbs.subscribe(segments => {
      this.breadcrumbs = segments;
    });
  }

}
