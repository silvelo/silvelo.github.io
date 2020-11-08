import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './pages/home/home.component';
import { SharedModule } from './shared/shared.module';
import { AboutComponent } from './pages/about/about.component';
import { HttpClientModule } from '@angular/common/http';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';
import { Angulartics2Module } from 'angulartics2';

import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { ResumeComponent } from './pages/resume/resume.component';
import { CertificationsCardsComponent } from './pages/resume/certifications-cards/certifications-cards.component';
import { EducationCardsComponent } from './pages/resume/education-cards/education-cards.component';
import { ExperienceCardsComponent } from './pages/resume/experience-cards/experience-cards.component';
import { AwardsComponent } from './pages/awards/awards.component';
import { PublicationsCardComponent } from './pages/awards/publications-card/publications-card.component';
import { AwardsCardComponent } from './pages/awards/awards-card/awards-card.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    HomeComponent,
    AboutComponent,
    PortfolioComponent,
    ResumeComponent,
    CertificationsCardsComponent,
    EducationCardsComponent,
    ExperienceCardsComponent,
    AwardsComponent,
    PublicationsCardComponent,
    AwardsCardComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    BrowserAnimationsModule,
    SharedModule,
    HttpClientModule,
    Angulartics2Module.forRoot()
  ],
  providers: [
    { provide: LocationStrategy, useClass: HashLocationStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
