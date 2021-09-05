import { Injectable } from '@angular/core';
import { RouterState, UrlSegment } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BreadcrumbsService {

  breadcrumbs = new BehaviorSubject<{pathFromRoot: string, text: string}[]>([]);

  constructor() { }

  setBreadcrumbs(routerState: RouterState) {
    const urlSegments: {pathFromRoot: string, text: string}[] = [];
    let route = routerState.snapshot.root;
    while(route && route.firstChild) {
      if(route.firstChild.url && route.firstChild.url.length > 0 && route.firstChild.url[0].path.toLowerCase() != 'home') {
        const path = route.firstChild.url[0].path;
        const pathFromRoot = route.pathFromRoot.map(r => r?.url[0]?.path).join('/') + path;
        urlSegments.push({pathFromRoot, text: path});
      }
      route = route.firstChild;
    }
    this.breadcrumbs.next(urlSegments);
  }
}
