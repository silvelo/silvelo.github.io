import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/core/services/api.service';


@Component({
  selector: 'app-sidenav-menu',
  templateUrl: './sidenav-menu.component.html',
  styleUrls: ['./sidenav-menu.component.scss']
})
export class SidenavMenuComponent implements OnInit {
  sidenav: ISidenav[] = [];
  me: IMeInfo = {} as IMeInfo;
  socialNetworks: ISocialNetwork[] = [];

  constructor(private apiService: ApiService) { }

  async ngOnInit() {
    this.sidenav = await this.apiService.getMenu();
    this.me = await this.apiService.getAbout();
    this.socialNetworks = await this.apiService.getSocial();
  }

}
