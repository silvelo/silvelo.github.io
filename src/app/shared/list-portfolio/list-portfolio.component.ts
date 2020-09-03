import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-list-portfolio',
  templateUrl: './list-portfolio.component.html',
  styleUrls: ['./list-portfolio.component.scss']
})
export class ListPortfolioComponent {
  @Input() portfolio: IPortfolio;



}
