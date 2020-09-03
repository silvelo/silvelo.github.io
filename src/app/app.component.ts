import { Component, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { ApiService } from './services/api.service';
import { environment } from 'src/environments/environment';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { Angulartics2GoogleTagManager } from 'angulartics2/gtm';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnDestroy {

  mobileQuery: MediaQueryList;
  sidenav: ISidenav[] = [];
  me: IMeInfo = {} as IMeInfo;

  private _mobileQueryListener: () => void;

  constructor(
    private router: Router,
    private apiService: ApiService,
    private angulartics2GoogleTagManager: Angulartics2GoogleTagManager,
    changeDetectorRef: ChangeDetectorRef,
    media: MediaMatcher
  ) {
    this.angulartics2GoogleTagManager.startTracking();
    this.router.events.pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        this.angulartics2GoogleTagManager.eventTrack('page_view', {
          page_path: event.urlAfterRedirects
        });
      });

    this.mobileQuery = media.matchMedia('(max-width: 720px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }
  async ngOnInit() {
    this.sidenav = await this.apiService.getMenu();
    this.me = await this.apiService.getAbout();
  }


  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }


}
