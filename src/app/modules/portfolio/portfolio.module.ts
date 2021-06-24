import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PortfolioRoutingModule } from './portfolio-routing.module';
import { PortfolioComponent } from './page/portfolio/portfolio.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { WorkComponent } from './component/work/work.component';

@NgModule({
  declarations: [PortfolioComponent, WorkComponent],
  imports: [SharedModule, PortfolioRoutingModule]
})
export class PortfolioModule {}
