import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { AwardsComponent } from './pages/awards/awards.component';
import { HomeComponent } from './pages/home/home.component';

import { PortfolioComponent } from './pages/portfolio/portfolio.component';
import { ResumeComponent } from './pages/resume/resume.component';


const routes: Routes = [{
  path: '',
  component: HomeComponent,
}, {
  path: 'about-us',
  component: AboutComponent,
}, {
  path: 'resume',
  component: ResumeComponent,
},
{
  path: 'awards',
  component: AwardsComponent,
},
{
  path: 'portfolio',
  component: PortfolioComponent,
},
{ path: '**', redirectTo: '/', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'top', useHash: true, })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
