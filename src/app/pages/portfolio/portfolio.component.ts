import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { Title, Meta } from '@angular/platform-browser';


@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {
  portfolio: IPortfolio[] = [];

  constructor(
    private apiService: ApiService,
    private titleService: Title,
    private metaTagService: Meta
  ) { }

  async ngOnInit() {
    this.titleService.setTitle('Silveo Portfolio');
    this.metaTagService.updateTag({ name: 'description', content: 'Soy Arturo Silvelo desarrollador JS Fullstack' });
    this.portfolio = await this.apiService.getPortfolio();
  }

}
