import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AwardsRoutingModule } from './awards-routing.module';
import { AwardsComponent } from './awards.component';
import { AwardsCardComponent } from './awards-card/awards-card.component';
import { PublicationsCardComponent } from './publications-card/publications-card.component';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    AwardsComponent,
    AwardsCardComponent,
    PublicationsCardComponent
  ],
  imports: [
    CommonModule,
    AwardsRoutingModule,
    SharedModule
  ]
})
export class AwardsModule { }