import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSidenavModule } from '@angular/material/sidenav';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';


import { SidenavMenuComponent } from './sidenav-menu/sidenav-menu.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    SidenavMenuComponent,
  ],
  imports: [
    CommonModule,
    MatListModule,
    FlexLayoutModule,
    RouterModule,
    MatIconModule
  ],
  exports: [
    MatSidenavModule,
    FlexLayoutModule,
    MatListModule,
    MatIconModule,
    MatCardModule,
    MatToolbarModule,
    MatButtonModule,
    SidenavMenuComponent
  ]
})
export class SharedModule { }
