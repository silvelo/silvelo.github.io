import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';
import { MaterialModule } from './material/material.module';
import {
  FontAwesomeModule,
  FaIconLibrary
} from '@fortawesome/angular-fontawesome';
import {
  faGithub,
  faLinkedin,
  faNpm,
  faTwitter
} from '@fortawesome/free-brands-svg-icons';
import {
  faAward,
  faBars,
  faBook,
  faBullhorn,
  faCalendar,
  faCertificate,
  faEnvelope,
  faEye,
  faHome,
  faLink,
  faQuestionCircle,
  faScroll,
  faUserGraduate,
  faUserTie
} from '@fortawesome/free-solid-svg-icons';
import { InfoTitleComponent } from './comonent/info-title/info-title.component';

@NgModule({
  declarations: [InfoTitleComponent],
  imports: [
    CommonModule,
    FlexLayoutModule,
    RouterModule,
    MaterialModule,
    FontAwesomeModule
  ],
  exports: [
    CommonModule,
    MaterialModule,
    FlexLayoutModule,
    FontAwesomeModule,
    InfoTitleComponent
  ]
})
export class SharedModule {
  constructor(faIconLibrary: FaIconLibrary) {
    faIconLibrary.addIcons(
      faGithub,
      faLink,
      faNpm,
      faTwitter,
      faLinkedin,
      faEnvelope,
      faEye,
      faHome,
      faCertificate,
      faQuestionCircle,
      faBullhorn,
      faBook,
      faBars,
      faCalendar,
      faAward,
      faUserGraduate,
      faScroll,
      faUserTie
    );
  }
}
