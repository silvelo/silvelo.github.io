import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  me: IMeInfo = {} as IMeInfo;
  constructor(private _apiService: ApiService) { }

  async ngOnInit() {
    this.me = await this._apiService.getAbout();
  }

}
