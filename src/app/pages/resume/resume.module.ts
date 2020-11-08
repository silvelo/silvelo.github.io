import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResumeRoutingModule } from './resume-routing.module';
import { ResumeComponent } from './resume.component';
import { CertificationsCardsComponent } from './certifications-cards/certifications-cards.component';
import { EducationCardsComponent } from './education-cards/education-cards.component';
import { ExperienceCardsComponent } from './experience-cards/experience-cards.component';



@NgModule({
  declarations: [
    ResumeComponent,
    CertificationsCardsComponent,
    EducationCardsComponent,
    ExperienceCardsComponent
  ],
  imports: [
    CommonModule,
    ResumeRoutingModule
  ]
})
export class ResumeModule { }
