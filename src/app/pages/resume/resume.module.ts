import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResumeRoutingModule } from './resume-routing.module';
import { ResumeComponent } from './resume.component';
import { CertificationsCardsComponent } from './certifications-cards/certifications-cards.component';
import { EducationCardsComponent } from './education-cards/education-cards.component';
import { ExperienceCardsComponent } from './experience-cards/experience-cards.component';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    ResumeComponent,
    CertificationsCardsComponent,
    EducationCardsComponent,
    ExperienceCardsComponent
  ],
  imports: [
    CommonModule,
    ResumeRoutingModule,
    SharedModule
  ]
})
export class ResumeModule { }
