import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { PortfolioRoutingModule } from './portfolio-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { PortfolioCardComponent } from './portfolio-card/portfolio-card.component';



@NgModule({
  declarations: [PortfolioComponent, PortfolioCardComponent],
  imports: [
    CommonModule,
    PortfolioRoutingModule,
    SharedModule
  ]
})
export class PortfolioModule { }
