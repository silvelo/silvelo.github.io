import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { HomeComponent } from './pages/home/home.component';
import { EducationComponent } from './pages/education/education.component';
import { ExperienceComponent } from './pages/experience/experience.component';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';


const routes: Routes = [{
  path: '',
  component: HomeComponent,
}, {
  path: 'about-us',
  component: AboutComponent,
}, {
  path: 'education',
  component: EducationComponent,
}, {
  path: 'experience',
  component: ExperienceComponent,
},
{
  path: 'portfolio',
  component: PortfolioComponent,
},
{ path: '**', redirectTo: '/', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
