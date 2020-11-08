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
  loadChildren: () => import('./pages/about/about.module').then(m => m.AboutModule)
}, {
  path: 'resume',
  loadChildren: () => import('./pages/resume/resume.module').then(m => m.ResumeModule)
},
{
  path: 'portfolio',
  loadChildren: () => import('./pages/portfolio/portfolio.module').then(m => m.PortfolioModule)
},
{ path: 'awards', loadChildren: () => import('./pages/awards/awards.module').then(m => m.AwardsModule) },

{ path: '**', redirectTo: '/', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'top', useHash: true, })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
