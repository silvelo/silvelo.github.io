import { Component, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { ApiService } from './services/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnDestroy {

  mobileQuery: MediaQueryList;
  sidenav: ISidenav[] = [];
  me: IMeInfo = {} as IMeInfo;
  links = [
    { title: 'HOME', ref: '/home' },
    { title: 'ABOUT', ref: '/about-us' },
    { title: 'EDUCATION', ref: '/education' },
    { title: 'EXPERIENCE', ref: '/experience' }
  ];

  private _mobileQueryListener: () => void;

  constructor(
    private domSanitizer: DomSanitizer,
    private _apiService: ApiService,
    private matIconRegistry: MatIconRegistry,
    changeDetectorRef: ChangeDetectorRef,
    media: MediaMatcher
  ) {
    this.mobileQuery = media.matchMedia('(max-width: 720px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
    this.matIconRegistry.addSvgIcon(
      'github',
      this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/icons/github.svg')
    );
    this.matIconRegistry.addSvgIcon(
      'linkedin',
      this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/icons/linkedin.svg')
    );
    this.matIconRegistry.addSvgIcon(
      'twitter',
      this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/icons/twitter.svg')
    );
  }
  async ngOnInit() {
    this.sidenav = await this._apiService.getMenu();
    this.me = await this._apiService.getAbout();
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }


}
