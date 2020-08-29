import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatSidenavModule } from '@angular/material/sidenav';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatCardModule,
    MatSidenavModule,
    FlexLayoutModule,
    MatListModule,
    MatIconModule
  ],
  exports: [
    MatCardModule,
    MatSidenavModule,
    FlexLayoutModule,
    MatListModule,
    MatIconModule
  ]
})
export class SharedModule { }
