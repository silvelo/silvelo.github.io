import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContentLayoutComponent } from './layout/content-layout/content-layout.component';

const routes: Routes = [
  {
    path: '',
    component: ContentLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./modules/home/home.module').then(m => m.HomeModule)
      }
    ]
  },
  { path: '**', redirectTo: '/home', pathMatch: 'full' }

  /* {path: '',
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

{ path: '**', redirectTo: '', pathMatch: 'full' },


 */
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
