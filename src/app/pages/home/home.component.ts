import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  socialNetworks: ISocialNetwork[] = [];
  me: IMeInfo = {} as IMeInfo;

  constructor(private _apiService: ApiService) { }

  async ngOnInit() {
    this.socialNetworks = await this._apiService.getSocial();
    this.me = await this._apiService.getAbout();

  }


}
