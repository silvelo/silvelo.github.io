import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AwardsRoutingModule } from './awards-routing.module';
import { AwardsComponent } from './page/awards/awards.component';
import { PanelListComponent } from './component/panel-list/panel-list.component';
import { AwardPanelComponent } from './component/award-panel/award-panel.component';
import { PublicationPanelComponent } from './component/publication-panel/publication-panel.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    AwardsComponent,
    PanelListComponent,
    AwardPanelComponent,
    PublicationPanelComponent
  ],
  imports: [SharedModule, AwardsRoutingModule]
})
export class AwardsModule {}
