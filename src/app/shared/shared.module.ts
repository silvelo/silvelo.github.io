import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSidenavModule } from '@angular/material/sidenav';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ListExperienceComponent } from './list-experience/list-experience.component';
import { ListEducationComponent } from './list-education/list-education.component';
import { ListCertificationComponent } from './list-certification/list-certification.component';
import { ListAwardsComponent } from './list-awards/list-awards.component';
import { ListPublicationsComponent } from './list-publications/list-publications.component';
import { TimeToPipe } from '../pipes/time-to.pipe';
@NgModule({
  declarations: [
    ListExperienceComponent,
    ListEducationComponent,
    ListCertificationComponent,
    ListAwardsComponent,
    ListPublicationsComponent,
    TimeToPipe
  ],
  imports: [
    CommonModule,
    MatListModule
  ],
  exports: [
    MatSidenavModule,
    FlexLayoutModule,
    MatListModule,
    MatIconModule,
    MatToolbarModule,
    ListExperienceComponent,
    ListEducationComponent,
    ListCertificationComponent,
    ListAwardsComponent,
    ListPublicationsComponent,
    TimeToPipe
  ]
})
export class SharedModule { }
