import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { ApiService } from 'src/app/core/services/api.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  sidenav: ISidenav[] = [];
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
  }
}
