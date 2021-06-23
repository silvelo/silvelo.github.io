import { Component, OnInit } from '@angular/core';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';
import { ApiService } from 'src/app/core/services/api.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
  sidenav: ISidenav[] = [];
  me: IMeInfo = {} as IMeInfo;
  socialNetworks: ISocialNetwork[] = [];
  url: string;
  constructor(private router: Router, private apiService: ApiService) {
    this.url = this.router.url;
  }

  async ngOnInit() {
    this.router.events.subscribe((event: any) => {
      if (event instanceof NavigationEnd) {
        this.url = event.url;
      }
      this.url = this.router.url;
    });
    this.sidenav = await this.apiService.getMenu();
    this.me = await this.apiService.getAbout();
    this.socialNetworks = await this.apiService.getSocial();
  }
}
