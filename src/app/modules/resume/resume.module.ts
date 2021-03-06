import { NgModule } from '@angular/core';

import { ResumeRoutingModule } from './resume-routing.module';
import { ResumeComponent } from './page/resume/resume.component';
import { SharedModule } from '../../shared/shared.module';
import { ExperiencePanelComponent } from './component/experience-panel/experience-panel.component';
import { PanelListComponent } from './component/panel-list/panel-list.component';

import { EducationPanelComponent } from './component/education-panel/education-panel.component';
import { CertificatePanelComponent } from './component/certificate-panel/certificate-panel.component';

@NgModule({
  declarations: [
    ResumeComponent,
    ExperiencePanelComponent,
    PanelListComponent,

    EducationPanelComponent,
    CertificatePanelComponent
  ],
  imports: [SharedModule, ResumeRoutingModule]
})
export class ResumeModule {}
