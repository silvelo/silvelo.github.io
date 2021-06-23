import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/core/services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  me: IMeInfo = {} as IMeInfo;

  constructor(private apiService: ApiService) {}

  async ngOnInit() {
    this.me = await this.apiService.getAbout();
  }
}
