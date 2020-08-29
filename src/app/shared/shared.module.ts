import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatCardModule} from '@angular/material/card';
import { MatSidenavModule } from '@angular/material/sidenav';
import { FlexLayoutModule } from '@angular/flex-layout';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatCardModule,
    MatSidenavModule,
    FlexLayoutModule
  ],
  exports:[
    MatCardModule,
    MatSidenavModule,
    FlexLayoutModule
  ]
})
export class SharedModule { }
