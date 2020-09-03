import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {
  portfolio: IPortfolio[] = [];

  constructor(private _apiService: ApiService) { }

  async ngOnInit() {
    this.portfolio = await this._apiService.getPortfolio();
  }

}
