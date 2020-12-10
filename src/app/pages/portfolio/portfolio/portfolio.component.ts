import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { ApiService } from 'src/app/core/services/api.service';


@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {
  portfolios: IPortfolio[] = [];

  constructor(
    private apiService: ApiService,
    private titleService: Title,
    private metaTagService: Meta
  ) { }

  async ngOnInit() {
    this.titleService.setTitle('Silveo Portfolio');
    this.metaTagService.updateTag({ name: 'description', content: 'Soy Arturo Silvelo desarrollador JS Fullstack' });
    this.portfolios = await this.apiService.getPortfolio();
  }

}
